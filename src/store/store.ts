import type {RootState} from "@/store/types";
import Vuex from 'vuex';


export const store = new Vuex.Store<RootState>({
    state: {
        films: [],
        trendings: [],
        query: '',
        ageFilter: [],
        genreFilter: '',
        genresRoulette: [],
        discover: [],
        visibleDiscover: [],
        rouletteFilms: []
    },
    getters: {
        getFilms(state: RootState){
            return state.films
        }
    },
    mutations: {
        setQuery(state: RootState, query: string): void{
            state.query = query
            if(query == ''){
                setTimeout(() => {
                    state.films = [];
                }, 1000);
            }
        },
        setFilms (state: RootState, films): void{
            state.films = films
        },
        setTrending(state: RootState, trendings): void{
            state.trendings = trendings
        },
        setGenreFilter(state: RootState, genre: string): void{
            state.genreFilter = genre
        },
        setGenresRoulette(state: RootState, genres: []): void{
            state.genresRoulette = genres
        },
        setYearFilter(state: RootState, year: []): void{
            state.ageFilter = year
        },
        setDiscover(state: RootState, discover): void{
            state.discover = discover
        },
        setVisibleDiscover(state: RootState, index:number=3): void{
            if(index==3){
                state.visibleDiscover = state.discover.slice(index-3, index)
            }
            else{
                if(state.discover[index] !== undefined){
                    state.visibleDiscover.push(state.discover[index-1], state.discover[index])
                }
            }
        },
        setSelectedFilm(state, index): void{
            let film = state.visibleDiscover[index];
            state.visibleDiscover = [film]
        },
        setRouletteFilms(state, rouletteFilms): void{
            state.rouletteFilms = rouletteFilms
        }
    },
    actions: {
        async fetchFilm(state, query) : Promise<void> {
                let searchTimer = 0;
                clearTimeout(searchTimer);
                searchTimer = setTimeout(async () => {
                    try {
                        const response = await fetch('http://127.0.0.1:8080/search?query=' + query);
                        if (!response.ok) {
                            throw new Error('Error al obtener datos');
                        }
                        const data = await response.json();
                        console.log(data.hits)
                        const limitedData = data.hits.slice(0, 20);
                        for (let film of limitedData) {
                            const response2 = await fetch('https://www.omdbapi.com/?apikey=85f7a0f9&t=' + film.originalTitle);
                            if (!response2.ok) {
                                throw new Error('Error al obtener datos');
                            }
                            const data2 = await response2.json();
                            film.imageUrl = data2.Poster
                            film.overview = data2.Plot;
                        }
                        this.commit('setFilms', limitedData);
                    } catch (error) {
                        console.error(error);
                    }
                }, 500);

        },

/*
        fetchFilm(state, query){
            let searchTimer = 0
            clearTimeout(searchTimer);
            searchTimer = setTimeout(() => {
                fetch('https://api.themoviedb.org/3/search/movie?api_key=328ffe84a89f269e32f7d765b670b911&query='+query)
                    .then(response => response.json())
                    .then(data => {
                        this.commit('setFilms', data.results);
                    });
            }, 500);
        },

 */
        fetchTrending(state): void{
            fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=328ffe84a89f269e32f7d765b670b911')
                .then(response => response.json())
                .then(data => {
                    for(let film of data.results){
                            film.title.length > 17 ? film.shortTitle = film.title.substring(0, 18) + '...' :
                                film.shortTitle = film.title;
                    }
                    this.commit('setTrending', data.results);
                });
        },
        fetchDiscover(state, list): void{
            let genres = list[1] + ',' + ',' + list[3];
            fetch('https://api.themoviedb.org/3/discover/movie?api_key=328ffe84a89f269e32f7d765b670b911&with_genres='+genres+'&with_runtime.lte='+list[2]+'&year='+list[0]+'&sort_by=popularity.desc')
                .then(response => response.json())
                .then(data => {
                    this.commit('setDiscover', data.results);
                    this.commit('setVisibleDiscover');
                });
        },
        fetchRoulette(state, list): void{
            let genres
            for(let genre of list){
                genres = genre + ',' + genres
            }
            fetch('https://api.themoviedb.org/3/discover/movie?api_key=328ffe84a89f269e32f7d765b670b911&with_genres='+genres+'&with_runtime.lte=&year=&sort_by=popularity.desc')
                .then(response => response.json())
                .then(data => {
                    this.commit('setRouletteFilms', data.results.slice(0,8));
                });

        }
    }

})

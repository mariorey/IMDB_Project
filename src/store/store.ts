import {createStore} from "vuex";

export const store = createStore({
    state: {
        films: [],
        trendings: [],
        query: '',
        ageFilter: [],
        genreFilter: '',
        discover: [],
        visibleDiscover: []
    },
    getters: {
        getFilms(state){
            return state.films
        }
    },
    mutations: {
        setQuery(state, query){
            state.query = query
        },
        setFilms (state, films){
            state.films = films
        },
        setTrending(state, trendings){
            state.trendings = trendings
        },
        setGenreFilter(state, genre){
            state.genreFilter = genre
        },
        setYearFilter(state, year){
            state.ageFilter = year
        },
        setDiscover(state, discover){
            state.discover = discover
        },
        setVisibleDiscover(state, index=3){
            if(index==3){
                state.visibleDiscover = state.discover.slice(index-3, index)
            }
            else{
                if(state.discover[index] !== undefined){
                    state.visibleDiscover.push(state.discover[index-1], state.discover[index])
                }
            }
        },
        setSelectedFilm(state, index){
            let film = state.visibleDiscover[index];
            state.visibleDiscover = [film]
        }
    },
    actions: {
/*
        async fetchFilm(state, query) {
            clearTimeout(this.searchTimer);
            this.searchTimer = setTimeout(async () => {
                try {
                    const response = await fetch('http://localhost:8080/search/terms?values=' + query + '&field=primaryTitle');
                    if (!response.ok) {
                        throw new Error('Error al obtener datos');
                    }
                    const data = await response.json();
                    const limitedData = data.slice(0, 20);
                    for (let film of limitedData) {
                        const response2 = await fetch('https://www.omdbapi.com/?apikey=85f7a0f9&t=' + film.originalTitle);
                        if (!response2.ok) {
                            throw new Error('Error al obtener datos');
                        }
                        const data2 = await response2.json();
                        film.imageUrl = data2.Poster;
                    }
                    this.commit('setFilms', limitedData);
                } catch (error) {
                    console.error(error);
                }
           }, 500);
        },
        */

        fetchFilm(state, query){
            clearTimeout(this.searchTimer);
            this.searchTimer = setTimeout(() => {
                fetch('https://api.themoviedb.org/3/search/movie?api_key=328ffe84a89f269e32f7d765b670b911&query='+query)
                    .then(response => response.json())
                    .then(data => {
                        this.commit('setFilms', data.results);
                    });
            }, 500);
        },
        fetchTrending(state){
            fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=328ffe84a89f269e32f7d765b670b911')
                .then(response => response.json())
                .then(data => {
                    this.commit('setTrending', data.results);
                });
        },
        fetchDiscover(state, list){
            let genres = list[1] + ',' + ',' + list[3];
            fetch('https://api.themoviedb.org/3/discover/movie?api_key=328ffe84a89f269e32f7d765b670b911&with_genres='+genres+'&with_runtime.lte='+list[2]+'&year='+list[0]+'&sort_by=popularity.desc')
                .then(response => response.json())
                .then(data => {
                    this.commit('setDiscover', data.results);
                    this.commit('setVisibleDiscover');
                });
        }
    }

})

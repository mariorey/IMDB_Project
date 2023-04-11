import {createStore} from "vuex";

export const store = createStore({
    state: {
        films: [],
        trendings: [],
        query: '',
        ageFilter: [],
        genreFilter: '',
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
        }
    },
    actions: {
        /*
        fetchFilm(state, query) {
            clearTimeout(this.searchTimer);
            this.searchTimer = setTimeout(() => {
                fetch('http://localhost:8080/search/terms?values=' + query + '&field=primaryTitle')
                    .then(response => response.json())
                    .then(data => {
                        data = data.slice(0, 20)
                        const fetchPromises = [];
                        for (let film in data) {
                            const fetchPromise = fetch('https://www.omdbapi.com/?apikey=85f7a0f9&t=' + data[film].primaryTitle)
                                .then(response => response.json())
                                .then(data2 => {
                                    data[film].imageUrl = data2.Poster
                                });

                            fetchPromises.push(fetchPromise);
                        }


                        Promise.all(fetchPromises)
                            .then(() => {
                                this.commit('setFilms', data);
                            })
                            .catch(error => {
                                console.error('Error en fetch: ', error);
                            });
                    });
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
        }
    }

})

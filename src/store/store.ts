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
    },
    actions: {
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

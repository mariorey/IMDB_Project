<template>
  <span class="title"> GENRE </span>
  <div class="wrapper">
    <div class="filters__genre">
      <button class="filters__genre--option" :class="{ active: selectedGenres.includes('28') }" v-on:click="selectGenre('28')">ACTION</button>
      <button class="filters__genre--option" :class="{ active: selectedGenres.includes('27') }" v-on:click="selectGenre('27')">HORROR</button>
      <button class="filters__genre--option" :class="{ active: selectedGenres.includes('35') }" v-on:click="selectGenre('35')">COMEDY</button>
      <button class="filters__genre--option" :class="{ active: selectedGenres.includes('14') }" v-on:click="selectGenre('14')">FANTASY</button>
      <button class="filters__genre--option" :class="{ active: selectedGenres.includes('10749') }" v-on:click="selectGenre('10749')">ROMANTIC</button>
    </div>
    <CustomRoulette v-bind:options="rouletteFilms" v-on:spin-complete="onSpinComplete"></CustomRoulette>
  </div>
  <div class="film__results">
    <span class="title"> RESULTS </span>
  <Transition name="fade">
  <CustomCard class="results__card" v-if="selectedFilm" v-bind:title="selectedFilm.title" v-bind:rating="selectedFilm.vote_average.toString()" v-bind:image-src="'https://image.tmdb.org/t/p/w500' + selectedFilm.poster_path"/>
  </Transition>
  </div>
</template>

<script>

import CustomRoulette from "@/components/CustomRoulette.vue";
import {mapState} from "vuex";
import CustomCard from "@/components/CustomCard.vue";

export default {
  name: "RouletteView",
  components: {CustomCard, CustomRoulette},
  data() {
    return {
      selectedGenres: [],
      selectedFilm: null
    }
  },
  computed: {
    ...mapState(['rouletteFilms'])
  },
  methods:{
    selectGenre(genre) {
      if (this.selectedGenres.includes(genre)) {
        this.selectedGenres.splice(this.selectedGenres.indexOf(genre), 1);
        this.$store.commit('setGenresRoulette', this.selectedGenres);
        this.$store.dispatch('fetchRoulette', this.selectedGenres);
      } else {
        this.selectedGenres.push(genre);
        this.$store.commit('setGenresRoulette', this.selectedGenres);
        this.$store.dispatch('fetchRoulette', this.selectedGenres);
      }

    },
    onSpinComplete(film) {

        this.selectedFilm = film;

    }
  }
}
</script>

<style lang="scss">
.wrapper{
  display:flex;
  flex-direction: column;
  gap: 3em;
}

.title{
  font-size: 1.5em;
  color: lightgrey;

}
.filters__genre{
  display: flex;
  flex-flow: row;
  align-items: center;
  gap:1em;
  font-size: 1.5em;
  color: lightgrey;
&--option{
   margin-top: 1em;
   background-color: #f44336;
   color: white;
   border: none;
   border-radius: 4px;
   padding: 10px;
   font-size: 16px;
   width: 100px;
   cursor: pointer;
 }
}

.film__results{
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100vw;
  align-items: center;
}
.results__card{
  max-width: 264px;;
  height: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity:0;
  transform: scale(0.3);
}

.filters__genre--option.active {
  background-color: rgba(255, 0, 0, 0.5);
}
</style>
<template>

  <div class="filters__wrapper">
    <span class="title"> GENRE </span>
    <div class="filters__genre">
      <button class="filters__genre--option" :class="{ active: selectedGenres.includes('28') }" v-on:click="selectGenre('28')">ACTION</button>
      <button class="filters__genre--option" :class="{ active: selectedGenres.includes('27') }" v-on:click="selectGenre('27')">HORROR</button>
      <button class="filters__genre--option" :class="{ active: selectedGenres.includes('35') }" v-on:click="selectGenre('35')">COMEDY</button>
      <button class="filters__genre--option" :class="{ active: selectedGenres.includes('14') }" v-on:click="selectGenre('14')">FANTASY</button>
      <button class="filters__genre--option" :class="{ active: selectedGenres.includes('10749') }" v-on:click="selectGenre('10749')">ROMANTIC</button>
    </div>

  </div>
  <div class="wrapperResults">
  <CustomRoulette v-bind:options="rouletteFilms" v-on:spin-complete="onSpinComplete"></CustomRoulette>
  <div class="film__results">
    <span class="title"> RESULTS </span>
  <Transition name="fade">
  <CardPopup class="results__card" v-if="selectedFilm" v-bind:film="selectedFilm"/>
  </Transition>
  </div>
  </div>
</template>

<script>

import CustomRoulette from "@/components/CustomRoulette.vue";
import {mapState} from "vuex";
import CustomCard from "@/components/CustomCard.vue";
import CardPopup from "@/components/CardPopup.vue";

export default {
  name: "RouletteView",
  components: {CustomCard, CustomRoulette, CardPopup},
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
      film.title.length > 17 ? film.shortTitle = film.title.substring(0, 18) + '...' :
          film.shortTitle = film.title;
        this.selectedFilm = film;
        console.log(film)

    }
  }
}
</script>

<style lang="scss">
.filters__wrapper{
  display:flex;
  flex-direction: column;
  width: 90vw;
  margin-left:4vw;
  align-items: center;
}

.wrapperResults{
  display:flex;
  flex-direction: row;
  gap: 3em;
  justify-content: center;
  margin-top: 3em;
}

.title{
  font-size: 2em;
  font-weight: bold;
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
  width: 40vw;
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

@media (max-width: 1024px) {
  .wrapperResults{
    flex-direction: column;
    align-items: center;
  }
  .film__results{
    width: 100%;
  }
  .title{
    text-align:center;
  }
  .filters__genre{
    max-width: 100vw;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
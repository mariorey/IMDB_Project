<template>
  <span class="title"> GENRE </span>
  <div class="filters__genre">
    <button class="filters__genre--option" :class="{ active: selectedGenres.includes('28') }" v-on:click="selectGenre('28')">ACTION</button>
    <button class="filters__genre--option" :class="{ active: selectedGenres.includes('27') }" v-on:click="selectGenre('27')">HORROR</button>
    <button class="filters__genre--option" :class="{ active: selectedGenres.includes('35') }" v-on:click="selectGenre('35')">COMEDY</button>
    <button class="filters__genre--option" :class="{ active: selectedGenres.includes('14') }" v-on:click="selectGenre('14')">FANTASY</button>
    <button class="filters__genre--option" :class="{ active: selectedGenres.includes('10749') }" v-on:click="selectGenre('10749')">ROMANTIC</button>
  </div>
  <CustomRoulette v-bind:options="rouletteFilms"></CustomRoulette>
</template>

<script>

import CustomRoulette from "@/components/CustomRoulette.vue";
import {mapState} from "vuex";

export default {
  name: "RouletteView",
  components: {CustomRoulette},
  data() {
    return {
      selectedGenres: [],
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
  }
}
</script>

<style lang="scss">
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
.filters__genre--option.active {
  background-color: rgba(255, 0, 0, 0.5);
}
</style>
<template>
  <button class="filter-button" v-on:click="toggleFilters">FILTERS</button>
  <div class="filters" :class="{ 'show-filters': showFilters }">
    <button class="filters--close" v-on:click="hideFilters" >X</button>
    <div class="filters__year">
      <div class="filters__year">
        <span> YEAR </span>
        <div class="range__container">
          <span>{{ yearDisplay[0] }}-</span>
          <span>{{ yearDisplay[1] }}</span>
          <input type="range" min="1920" max="2023" step="1" v-model="yearDisplay[0]" @input="updateYearFilter">
          <input type="range" min="1920" max="2023" step="1" v-model="yearDisplay[1]" @input="updateYearFilter">
        </div>
      </div>
    </div>
    <div class="filters__genre">
      <span> GENRE </span>
      <button class="filters__genre--option" :class="{ active: selectedGenre === 'ACTION' }" v-on:click="selectGenre('ACTION')">ACTION</button>
      <button class="filters__genre--option" :class="{ active: selectedGenre === 'HORROR' }" v-on:click="selectGenre('HORROR')">HORROR</button>
      <button class="filters__genre--option" :class="{ active: selectedGenre === 'COMEDY' }" v-on:click="selectGenre('COMEDY')">COMEDY</button>
      <button class="filters__genre--option" :class="{ active: selectedGenre === 'FANTASY' }" v-on:click="selectGenre('FANTASY')">FANTASY</button>
      <button class="filters__genre--option" :class="{ active: selectedGenre === 'ROMANTIC' }" v-on:click="selectGenre('ROMANTIC')">ROMANTIC</button>

    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
  components: {
    VueSlider
  },
  data() {
    return {
      showFilters: false,
      yearRange: 1,
      yearDisplay: ["1920", "2023"],
      selectedGenre: '',
    };
  },
  methods: {
    toggleFilters() {
      this.showFilters = !this.showFilters;
    },
    hideFilters() {
        this.showFilters = false;
    },
    selectGenre(genre) {
      if (this.selectedGenre === genre) {
        this.resetGenre();
        this.selectedGenre = '';
        this.$store.commit('setGenreFilter', '');
      }
      else{
        this.resetGenre();
        this.selectedGenre = genre;
        this.$store.commit('setGenreFilter', genre);
      }
    },
    resetGenre() {
      this.selectedGenre = '';
    },
    updateYearFilter() {
      this.$store.commit('setYearFilter', this.yearDisplay);
    }
  }
};
</script>

<style scoped lang="scss">
.filter-button {
  margin-left: 10px;
  background-color: #f44336;
  margin-top: 1em;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  width: 100px;
  cursor: pointer;

  align-self: flex-end;
}
.filter-button:hover {
  background-color: #e53935;
}
.filters__genre--option.active {
  background-color: rgba(255, 0, 0, 0.5);
}
.filter-button{
}
.filters {
  position: fixed;
  top: 0;
  z-index:2;
  right: 0;
  width: 400px;
  height: 100%;
  border-left: 1px solid white;

  background-color: black;
  transition: transform 0.4s ease;
  transform: translateX(100%);

  &--close{
    position: absolute;
    top: 0;
    left: 0;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px;
    font-size: 16px;
    width: 50px;
    cursor: pointer;
  }
}

.show-filters {
  transform: translateX(0);
}

.filters__year{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
  font-size: 1.5em;
  color: lightgrey;
}

.filters__genre{
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 2em;
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

.range__container {
  width: 300px;
  margin: auto;
  text-align: center;
  position: relative;
  height: 2em;

}
.range__container input[type=range] {
  position: absolute;
  left: 0;
  bottom: 0;
}
input[type=number] {
  margin: 20px;
  padding: 5px;
  border: 1px solid #ddd;
  text-align: center;
  font-size: 1.4em;
  -moz-appearance: textfield;
}
input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type=number]:invalid,
input[type=number]:out-of-range {
  border: 2px solid #ff6347;
}

input[type=range] {
  -webkit-appearance: none;
  width: 100%;
}

input[type=range]:focus {
  outline: none;
}

input[type=range]:focus::-webkit-slider-runnable-track {
  background: linear-gradient(255deg, var(--dark-purple-colour), var(--purple-colour), var(--pink-colour), var(--light-pink-colour), var(--orange-colour), var(--light-orange-colour));
}

input[type=range]:focus::-ms-fill-lower {
  background: linear-gradient(255deg, var(--dark-purple-colour), var(--purple-colour), var(--pink-colour), var(--light-pink-colour), var(--orange-colour), var(--light-orange-colour));
}
input[type=range]:focus::-ms-fill-upper {
  background: linear-gradient(255deg, var(--dark-purple-colour), var(--purple-colour), var(--pink-colour), var(--light-pink-colour), var(--orange-colour), var(--light-orange-colour));
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  transition: 0.2s;
  background: linear-gradient(255deg, var(--dark-purple-colour), var(--purple-colour), var(--pink-colour), var(--light-pink-colour), var(--orange-colour), var(--light-orange-colour));
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}
input[type=range]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0 0 0 #000;
  border: 1px solid var(--pink-colour);
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: rgba(179, 73, 80,0.9);
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}

@media only screen and (max-width: 1024px) {
  .filters{
    width: 100%;
  }
  .filter-button{
    align-self: center;
  }

}

</style>
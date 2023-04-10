<template>
  <button class="filter-button" @click="toggleFilters">FILTERS</button>
  <div class="filters" :class="{ 'show-filters': showFilters }">
    <button class=filters--close v-on:click="hideFilters" >X</button>
    <div class="filters__year">
      <span> YEAR </span>
      <input type="range" id="year" name="year" min="1920" max="2023" v-model="yearDisplay">
      <span>{{ yearDisplay }}</span>
    </div>
    <div class="filters__genre">
      <span> GENRE </span>
      <button class="filters__genre--option">ACTION</button>
      <button class="filters__genre--option">HORROR</button>
      <button class="filters__genre--option">COMEDY</button>
      <button class="filters__genre--option">FANTASY</button>
      <button class="filters__genre--option">ROMANTIC</button>

    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      showFilters: false,
      yearDisplay: 1900
    };
  },
  methods: {
    toggleFilters() {
      this.showFilters = !this.showFilters;
    },
    hideFilters() {

        this.showFilters = false;

    },
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
.filter-button{
}
.filters {
  position: fixed;
  top: 0;
  z-index:1;
  right: -400px;
  width: 400px;
  height: 100%;
  border-left: 1px solid white;

  background-color: black;
  transition: all 0.3s ease;
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
  right: 0;
}

.filters__year{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
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

</style>
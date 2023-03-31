<template>
  <button class="filter-button" @click="toggleFilters">FILTERS</button>
  <div class="filters" :class="{ 'show-filters': showFilters }">
    <button v-on:click="hideFilters" >X</button>




  </div>
</template>

<script>

export default {
  data() {
    return {
      showFilters: false
    };
  },
  methods: {
    toggleFilters() {
      this.showFilters = !this.showFilters;
    },
    hideFilters(e) {

        this.showFilters = false;

    }
  }
};
</script>

<style scoped>
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
}

.show-filters {
  right: 0;
}
</style>
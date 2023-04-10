<template>
<div class="wrapper">
  <input class="search" placeholder="Search for a film" v-on:input="search"/>
  <CustomFilter></CustomFilter>
</div>
</template>

<script>
import CustomFilter from './CustomFilter.vue';
export default {
  components: {CustomFilter},
  name: "CustomSearch",
  methods: {
    search: function(event){
      this.$store.dispatch('fetchFilm', event.target.value);
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper{
display: flex;
flex-direction: column;
}

.search {
  width: 80vw;
  height: 44px;
  font-size: 0.8em;
  border:none;
  color: white;
  border-bottom: 1px solid white;
  background: black;
  letter-spacing: 1px;
  text-transform: uppercase;

&:focus{
   outline-width: 0;
 }
}



@media only screen and (max-width: 1024px)  {
  .search{
    width: 80vw;
    height: 4vh;
    font-size: 0.8em;
  }
  .filter-button {
    display:none;
  }
  .wrapper{
    display: flex;
    flex-direction: column;
   
  }
}
</style>
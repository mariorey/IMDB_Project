<template>
<div class="wrapper">
  <input class="search" placeholder="Search for a film" v-on:input="$emit('textInput',$event)"/>
  <CustomFilter></CustomFilter>
</div>
</template>

<script>
import CustomFilter from './CustomFilter.vue';
export default {
  components: {CustomFilter},
  name: "CustomSearch"
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
  font-size: 1em;
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
    margin-bottom: -2em;
  }
  .filter-button {
    display:none;
  }
}
</style>
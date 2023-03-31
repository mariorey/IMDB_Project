<template>

  <input class="search" placeholder="Search for a film" v-on:input="$emit('textInput',$event)"/>
  <button class="filter-button">FILTERS</button>
</template>

<script>
export default {
  name: "CustomSearch"
}
</script>

<style scoped lang="scss">
.search {
  width: 40vw;
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


.filter-button {
  margin-left: 10px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}
.filter-button:hover {
  background-color: #e53935;
}
@media only screen and (max-width: 1024px)  {
  .search{
    width: 80%;
    height: 4vh;
    font-size: 0.8em;
    margin-bottom: -2em;
  }
  .filter-button {
    display:none;
  }
}
</style>
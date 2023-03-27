<template>
  <input class="search" placeholder="Search for a film" v-on:input="$emit('textInput',$event)"/>
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
  margin: 0 auto;
&:focus{
   outline-width: 0;
 }
}
@media only screen and (max-width: 830px)  {
  .search{
    width: 80%;
  }
}
</style>
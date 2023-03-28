<template>
  <article class="film">
    <img class="film__image" v-bind:alt="'Film image of' + title" v-bind:src="imageSrc"/>
    <div class="film__description">
      <span class="film__description--title">{{ title }}</span>
      <span class="film__description--rating">{{ rating }}<img src="../assets/star.png" style="height:1em;"></span>

    </div>
  </article>

</template>

<script>
export default {
  name: "CustomCard",
  props: {
    title: {
      type: String,
      default: 'No title'
    },
    rating: {
      type: String,
      default: "3.5"
    },
    imageSrc: {
      type: String,
      default: 'https://catalog.osaarchivum.org/assets/thumbnail_placeholder_movie-480596e192e7043677f77cf78b13bdd1.jpg'
    }
  }
}
</script>

<style scoped lang="scss">
.film{
  background: #2d2d2d;
  color: white;
  width: 250px;
  height: 470px;
  font-size: 1.5em;
  &__description{
    display:flex;
    justify-content: space-between;
    margin-left: 0.5em;
  }
  &__image{
    width: 250px;
    height: 388px;

  }
}
@media (max-width: 700px) {
  .film{
    width: 90%;
    height: 90%;
    font-size:4em;
   &__image{
     width: 100%;
     height: 90%;

   }
  }

}

@media (max-width: 1024px) and (min-width: 700px) {
  .film{
    width:40%;
    max-width: 800px;
    height: 85%;
    font-size:3em;
    &__image{
      width: 100%;
      height: 90%;

    }
  }

}
</style>
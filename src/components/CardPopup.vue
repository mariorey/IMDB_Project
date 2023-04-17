<template>
  <article class="film" @click="showPopupDialog">
    <img class="film__image" v-bind:alt="'Film image of' + title" v-bind:src="imageSrc"/>
    <div class="film__description">
      <span class="film__description--title">{{ title }}</span>
      <span class="film__description--rating">{{ rating }}<img src="../assets/star.png" alt="rating" style="height:1em;"></span>
    </div>
  </article>
  <div class="popup" v-if="showPopup">

  </div>



</template>

<script>
export default {
  name: "CustomCard",
  data() {
    return {
      showPopup: false
    }
  },
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
  },
  methods: {
    showPopupDialog() {
      this.showPopup = true;
    },
  }
}
</script>

<style scoped lang="scss">
.film {

  background: #2d2d2d;
  color: white;
  width: 95%;
  height: 100%;
  font-size: 1.5em;
  max-width: 264px;

  &__description {
    display: flex;
    justify-content: space-between;
    margin-left: 0.5em;
  }

  &__image {
    width: 100%;
    height: 388px;
    max-height:388px;
    max-width:264px;

  }

}

.popup {
  background: #2d2d2d;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index:3;

}





@media (max-width: 1024px) {
  .film {
    width: 100%;
    height: 100%;
    font-size: 1em;

    &__image {
      width: 100%;
      max-width: 264px;
      height: 388px;
    }
  }
}


</style>
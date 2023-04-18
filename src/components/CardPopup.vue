<template>

  <article class="film" @click="showPopupDialog">
    <img class="film__image" v-bind:alt="'Film image of' + film.title" v-bind:src="'https://image.tmdb.org/t/p/w500' + film.poster_path"/>
    <div class="film__description">
      <span class="film__description--title">{{ film.title }}</span>
      <span class="film__description--rating">{{ film.vote_average.toString() }}<img src="../assets/star.png" alt="rating" style="height:1em;"></span>
    </div>
  </article>
  <Transition name="fade">
  <div class="popup" v-if="showPopup">
    <div class="popup__header">
    <img class="film__image" v-bind:alt="'Film image of' + film.title" v-bind:src="'https://image.tmdb.org/t/p/w500' + film.poster_path"/>
    <div class="popup__content">
      <h3>{{ film.title }}</h3>
      <span class="popup__voting">{{ film.vote_average.toString() }}<img src="../assets/star.png" alt="rating" style="margin:0;height:1.2em;width:1.2em;">
        <p class="popup__voting--popularity"> {{ film.popularity }} votes</p>
      </span>
      <p class="popup__release">{{ film.release_date }}</p>
    </div>
    <button class="popup__button" @click="closePopup">X</button>
      </div>
    <div class="popup__info">
    <p class="popup__overview">{{ film.overview }}</p>
    </div>
  </div>
  </Transition>
  <div class="overlay" v-if="showPopup" @click="closePopup"></div> <!-- Agregar esta línea -->

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
    film: {
      type: Object,
      default: ''
    },
  },
  methods: {
    showPopupDialog() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;

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
  max-height: 480px;
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

  &:hover{
    cursor: pointer;
    transform: scale(1.05);
    transition: transform 0.5s;
  }

}

.popup__header{
  display:flex;
  flex-direction:row;
}

.popup__info{
  margin:1em;
  font-weight:3;
  font-size: 1.2em;
}

.popup {
  display:flex;
  flex-direction:column;
  background: #2d2d2d;
  color:lightgrey;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 40vw;
  height: 50vh;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  z-index:3;
  &__content {
    display:flex;
    flex-direction:column;
    margin-top: 1em;
    font-size: 1.5em;
  }
  & img {
    width: 100px;
    height: 147px;
    margin: 2em;
    margin-bottom: 0;
  }
  &__button{
    height: 2em;
    margin-left:auto;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px;
    font-size: 16px;
    width: 50px;
    cursor: pointer;
  }
  &__voting {
    display: flex;
    align-items:center;
    font-size: 0.8em;
    &--popularity{
      margin-left: 0.5em;
    }
  }
  &__release {
    font-size: 0.8em;
  }

}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Puedes ajustar la opacidad aquí */
  z-index: 1; /* Asegúrate de que la capa esté por debajo del popup */
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


.fade-enter-active, {
  transition: 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity:0;
  transform: scale(0.2);
}



</style>
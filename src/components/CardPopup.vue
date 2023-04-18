<template>

  <article class="film">
    <div class="img__wrapper">
      <img class="film__image" v-bind:alt="'Film image of' + film.title" v-bind:src="'https://image.tmdb.org/t/p/w500' + film.poster_path"/>
    </div>
    <div class="film__description">
      <span class="film__description--title">{{ film.shortTitle }}</span>
      <span class="film__description--rating">{{ film.vote_average.toString() }}<img src="../assets/star.png" alt="rating" style="height:1em;"></span>
    </div>
    <img src="../assets/info.png" class="film__info" @click="showPopupDialog">
  </article>
  <Transition name="fade">
  <div class="popup" v-if="showPopup">
    <div class="popup__header">
    <img class="film__image" v-bind:alt="'Film image of' + film.title" v-bind:src="'https://image.tmdb.org/t/p/w500' + film.poster_path"/>
    <div class="popup__content">
      <h3 class="popup__content--title">{{ film.title }}</h3>
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
  beforeMount(){
    this.shortenTitles()
  },
  methods: {
    showPopupDialog() {
      console.log(this.film.overview.length)
      if(this.film.overview.toString().length > 1000){
        this.film.overview = this.film.overview.toString().substring(0, 225) + '...';
      }
      this.showPopup = true;

    },
    closePopup() {
      this.showPopup = false;

    },
    shortenTitles(){
      this.film.title.length > 17 ? this.film.shortTitle = this.film.title.substring(0, 18) + '...' :
      this.film.shortTitle = this.film.title;

    },
  }
}
</script>

<style scoped lang="scss">
.film {
  font-family:Roboto, sans-serif;
  background: #2d2d2d;
  color: white;
  width: 258.66px;
  height: 450px;
  font-size: 1.2em;
  font-weight:600;
  max-width: 264px;
  max-height: 490px;
  &__description {
    display: flex;
    justify-content: space-between;
    margin-left: 0.5em;
    margin-top: 0.2em;

  }

  &__image {
    width: 100%;
    height: 388px;
    max-height:388px;
    max-width:264px;
  &:hover{
    transform: scale(1.1);
    transition: 0.5s;
  }
  }

  &__info{
    position:absolute;
    margin-left:0.5em;
    width:30px;
    color:white;
    cursor: pointer;
  }

}

.img__wrapper{
  overflow:hidden;
  height:388px;
  width:258.66px;
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
    width: 258.66px;
    height: 450px;
    font-size: 1em;

    &__image {
      width: 100%;
      max-width: 264px;
      height: 388px;
    }
  }
  .popup{
    width:100vw;
    height:50vh;
    &__content{

      &--title{
      }
    }
    &__info{
      font-size: 1em;
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
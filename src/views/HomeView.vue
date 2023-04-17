<script setup>
import CustomSearch from '../components/CustomSearch.vue'
import CustomCarousel from '../components/CustomCarousel.vue'
import CustomResults from "@/components/CustomResults.vue";

</script>

<template>
    <div class="search">
      <CustomSearch/>
    </div>
  <main class="container">
    <Transition name="fade">
    <div class="results" v-if="this.$store.state.films.length > 0">
      <h2 class="results__title">RESULTS</h2>
      <CustomResults></CustomResults>
    </div>
    </Transition>
    <div class="trending">
      <h2 class="trending__title">TRENDING</h2>
      <CustomCarousel></CustomCarousel>
    </div>
  </main>
</template>

<style scoped lang="scss">
.container{
  display:flex;
  flex-direction: column;
}

.navigation {
  display:flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1em;
  &__logo{
    margin-right: 40%;
    margin-left: 4em;
    &--img{
      width: 40%;
    }
  }
}
.search{
  display: flex;
  justify-content: center;
}

.trending{
  display:flex;
  flex-direction: column;
  align-items:center;
  margin-top:3em;
  &__title{
    color:white;
    font-size: 2em;
    font-weight: bold;
    margin-top: -1.8em;
  }
}

.results{
  display:flex;
  flex-direction: column;
  align-items:center;
  margin-top:3em;
  &__title{
    color:white;
    font-size: 2em;
    font-weight: bold;
    margin-top: -1.8em;
  }
}





@media (max-width: 1024px) {
  .trending{
    &__title{
      font-size: 1.5em;
      max-width: 95%;
    }
  }
  .results{
    &__title{
      font-size: 1.5em;
      max-width: 95%;
    }
  }

}
.fade-enter-active, .fade-leave-active {
  transition: 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity:0;
  transform: scale(0.3);
}
</style>

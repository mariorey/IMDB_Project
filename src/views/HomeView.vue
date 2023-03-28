<script setup lang="ts">
import { RouterView } from 'vue-router'
import CustomSearch from '../components/CustomSearch.vue'
import CustomCarousel from '../components/CustomCarousel.vue'
</script>

<template>

    <div class="search">
      <CustomSearch/>
    </div>
  <main class="container">
    <div class="trending">
      <h2 class="trending__title">TRENDING</h2>
      <CustomCarousel></CustomCarousel>
    </div>
  </main>

  <RouterView />
</template>

<style scoped lang="scss">
.container{
  display:flex;
  flex-direction: column;
  margin-left: -1em;
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
  }
}

:root {
  --font-fam: 'Lato', sans-serif;
  --height: 5rem;
  --bez: cubic-bezier(0, 0, 0.43, 1.49);
}




@media (max-width: 1024px) {
  .trending{
    &__title{
      font-size: 1.5em;
      max-width: 95%;
    }
  }

}
</style>

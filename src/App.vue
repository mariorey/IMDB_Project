<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CustomSearch from './components/CustomSearch.vue'
import CustomNavigation from './components/CustomNavigation.vue'
import CustomCarousel from './components/CustomCarousel.vue'
</script>

<template>
  <header>
      <div class="navigation">
        <div class="navigation__logo">
          <img src="./assets/logo.png" style="height:4em">
        </div>
        <div class="navigation__buttons">
          <CustomNavigation/>
        </div>
      </div>
    <div class="search">
      <CustomSearch/>
    </div>
  </header>
  <main>
    <div class="trending">
      <h2 class="trending__title">TRENDING</h2>
      <CustomCarousel></CustomCarousel>
    </div>
  </main>

  <RouterView />
</template>

<style scoped lang="scss">

.navigation {
  display:flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1em;
  &__logo{
    margin-right: 70em;

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


}
</style>

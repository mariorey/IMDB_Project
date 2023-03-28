<script setup lang="ts">
import { RouterView } from 'vue-router'
import CustomSearch from '../components/CustomSearch.vue'
import CustomCarousel from '../components/CustomCarousel.vue'
</script>

<template>

  <header>
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
  .navigation {
    flex-direction: column;
    align-items: center;
    &__logo{
      margin-right: 0;
      margin-left: 0;
      &--img{
        width: 40vw;
        min-width:400px;
      }
    }
    &__buttons{
      display:flex;
      flex-direction: row;
      font-size: 3em;
    }
  }

  .trending{
    &__title{
      font-size: 4em;
    }
  }

}
</style>

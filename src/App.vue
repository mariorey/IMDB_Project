<template>
  <header>
    <div class="navigation">
      <div class="navigation__logo">
        <img class="navigation__logo--img" alt="Film Match" src="./assets/logo.png">
      </div>
      <div class="navigation__buttons">
        <CustomNavigation/>
      </div>
    </div>
  </header>
  <RouterView />
  <CustomFooter/>

</template>
<script>
import {defineComponent} from "vue";
import CustomNavigation from "@/components/CustomNavigation.vue";
import CustomFooter from "@/components/CustomFooter.vue";

export default defineComponent({
  components: {CustomNavigation, CustomFooter}
})


</script>
<style lang="scss" scoped>

.navigation {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1em;
  &__logo {
    margin-right: 40%;
    margin-left: 4em;
    &--img {
      width: 40%;
    }
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
        width: 30vw;
      }
    }
    &__buttons{
      display:flex;
      flex-direction: row;
      font-size: 1em;
    }
  }


}
</style>
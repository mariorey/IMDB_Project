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
  <footer class="footer">
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="https://www.github.com/mariorey">
        <ion-icon name="logo-github"></ion-icon>
      </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="https://www.linkedin.com/in/mario-rey-139b2a224/">
        <ion-icon name="logo-linkedin"></ion-icon>
      </a></li>
    </ul>
    <p>&copy;2023 Mario Rey | All Rights Reserved</p>
  </footer>

</template>
<script>
import {defineComponent} from "vue";
import CustomNavigation from "@/components/CustomNavigation.vue";

export default defineComponent({
  components: {CustomNavigation}
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

.footer {
  position: relative;
  width: 100%;
  background: black;
  min-height: 100px;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & p {
    color: #fff;
    margin: 15px 0 10px 0;
    font-size: 1rem;
    font-weight: 300;
  }
}

.social-icon,
.menu {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
}

.social-icon__item,
.menu__item {
  list-style: none;
}

.social-icon__link {
  font-size: 2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
  &:hover {
    transform: translateY(-10px);
    background: none;
  }
}

.menu__link {
  font-size: 1.2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
  text-decoration: none;
  opacity: 0.75;
  font-weight: 300;
  &:hover {
    opacity: 1;
  }
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
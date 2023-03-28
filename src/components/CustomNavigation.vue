<template>
  <div class="wrapper">
    <RouterLink class="wrapper--home" to="/">HOME</RouterLink>
    <RouterLink class="wrapper--discover" to="/discover">DISCOVER</RouterLink>
  </div>
</template>

<script>
export default {
  name: "CustomNavigation"
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: row;
  position:relative;
  font-size: 1.2em;
  &--home{
    color:#E50914;
    color-border-hover:#E50914;
    margin-right: 1em;
    margin-left: 3em;

  }
  &--discover{
    color:#E50914;
    margin-right: 2em;

  }
}

a {

  color: #E50914;

  &.router-link-exact-active {
    color: #E50914;
    font-weight: bold;
  }

  &:hover {
    background:black;
  }
}

@media (max-width: 1024px) {
  .navigation--home{
    margin-right: 1em;
  }

}
</style>
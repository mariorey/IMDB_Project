<template>
  <div class="navigation">
    <RouterLink class="navigation--home" to="/">HOME</RouterLink>
    <RouterLink class="navigation--discover" to="/discover">DISCOVER</RouterLink>
  </div>
</template>

<script>
export default {
  name: "CustomNavigation"
}
</script>

<style scoped lang="scss">
.navigation {
  display: flex;
  flex-direction: row;
  position:relative;
  font-size: 1.2em;
  &--home{
    color:#E50914;
    color-border-hover:#E50914;
    margin-right: 1em;
  }
  &--discover{
    color:#E50914;

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

</style>
<template>
  <div class="discover">
    <h2 class="discover__question">¿Qué estilo de música prefieres?</h2>
    <div class="options">
      <div class="option">
        <img class="option__image" src="https://cdn-profiles.tunein.com/s238570/images/logog.png?t=158749" alt="Reggaeton">
        <p class="option__image--title">Reggaeton</p>
      </div>
      <div class="option">
        <img class="option__image" src="https://o.remove.bg/downloads/d2da1fa5-5a29-4cf3-945c-8d0e5359ce92/image-removebg-preview.png" alt="Música clásica">
        <p class="option__image--title">Música clásica</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.discover {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__question{
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: lightgrey;
  }
}

.options {
  display: flex;
  justify-content: space-around;
  width: 80%;
}
.option {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__image {
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 1rem;
    &:hover{
      transform: scale(1.1);
      transition: all 0.5s ease;
    }
    &--title{
      font-size: 1.5rem;
      font-weight: bold;
      color: lightgrey;
    }
  }
}


@media (max-width: 1023px) {
  .discover {
    padding: 2rem;
  }
  .discover__question {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: lightgrey;
  }
  .options {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .option {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }
  .option__image {
    width: 100%;
    max-width: 350px;
    height: auto;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 1rem;
  }
  .option__image--title {
    font-size: 2rem;
    font-weight: bold;
    color: lightgrey;
  }
}
</style>

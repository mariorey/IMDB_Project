<template>
  <div class="discover">
    <h2 class="discover__question">{{ question }}</h2>
    <div class="options">
      <div v-for="(option, index) in options" :key="index" class="option">
        <img class="option__image" :src="option.image" :alt="option.title" v-on:click="$emit('optionSelected', option.value)">
        <p class="option__image--title">{{ option.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomQuiz",
  props: {
    question: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true,
      validator: (options) => {
        return options.every((option) => {
          return option.image && option.title && option.value
        });
      }
    },
  }
};
</script>

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


</style>
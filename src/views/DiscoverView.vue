<template>
  <CustomQuiz
      question="¿Qué estilo de música prefieres?"
      :options="[
        {
          image: 'https://cdn-profiles.tunein.com/s238570/images/logog.png?t=158749',
          title: 'Reggaeton'
        },
        {
          image: '../src/assets/classical.png',
          title: 'Música clásica'
        }
      ]" :onOptionSelected="selectOption"
      v-if="showQuestion==1"/>
  <CustomQuiz
      question="¿Qué estilo de música prefieres?"
      :options="[
        {
          image: 'https://cdn-profiles.tunein.com/s238570/images/logog.png?t=158749',
          title: 'PRUEBA 1'
        },
        {
          image: '../src/assets/classical.png',
          title: 'PRUEBA 2'
        }
      ]" :onOptionSelected="selectOption"
      v-if="showQuestion==2"/>
  <CustomQuiz
      question="¿Qué estilo de música prefieres?"
      :options="[
        {
          image: 'https://cdn-profiles.tunein.com/s238570/images/logog.png?t=158749',
          title: 'PRUEBA  3'
        },
        {
          image: '../src/assets/classical.png',
          title: 'PRUEBA 4'
        }
      ]" :onOptionSelected="selectOption"
      v-if="showQuestion==3"/>
</template>
<script>
import { defineComponent } from "vue";
import CustomQuiz from "@/components/CustomQuiz.vue";

export default defineComponent({
  components: { CustomQuiz },
  data() {
    return {
      selectedOption:[] ,
      showQuestion: 1,
    };
  },
  methods: {
    selectOption(title) {
      this.selectedOption.push(title);
      this.showQuestion ++;
    },
  },
});
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

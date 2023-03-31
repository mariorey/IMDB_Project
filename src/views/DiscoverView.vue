<template>
  <div class="discover">
    <Transition name="fade" @after-leave="showQuestion=2">
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
          v-show="showQuestion==1"/>
    </Transition>
    <Transition name="fade" @after-leave="showQuestion=3">
      <CustomQuiz
          question="¿Qué género te apetece más?"
          :options="[
        {
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Comedy_film_icon.svg/1024px-Comedy_film_icon.svg.png',
          title: 'COMEDIA'
        },
        {
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Drama-film-stub-icon.svg/768px-Drama-film-stub-icon.svg.png',
          title: 'DRAMA'
        }
      ]" :onOptionSelected="selectOption"
          v-show="showQuestion==2"/>
    </Transition>
    <Transition name="fade" @after-leave="showQuestion=4">
      <CustomQuiz
          question="¿Cuánto tiempo tienes?"
          :options="[
        {
          image: 'https://cdn-icons-png.flaticon.com/512/6520/6520467.png',
          title: 'Menos de 2 horas'
        },
        {
          image: 'https://static.vecteezy.com/system/resources/previews/010/927/281/non_2x/two-hour-arrow-icon-on-white-background-2-hours-sign-timer-symbol-flat-style-vector.jpg',
          title: 'Más de 2 horas'
        }
      ]" :onOptionSelected="selectOption"
          v-show="showQuestion==3"/>
    </Transition>
    <Transition name="fade">
      <div class="card-wrapper" v-show="showQuestion==4">
        <h2>Esta es la película recomendada para ti</h2>
        <CustomCard rating="3.5" title="Cars" imageSrc="https://pics.filmaffinity.com/Cars-746710621-large.jpg" />
      </div>
    </Transition>
  </div>

</template>
<script>
import { defineComponent } from "vue";
import CustomQuiz from "@/components/CustomQuiz.vue";
import CustomCard from "@/components/CustomCard.vue";

export default defineComponent({
  components: { CustomQuiz, CustomCard },
  data() {
    return {
      selectedOption:[] ,
      showQuestion: 1,
    };
  },
  methods: {
    selectOption(title) {
      this.selectedOption.push(title);
      this.showQuestion = 0;
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
.card-wrapper {
  display: flex;
  color: lightgrey;
  font-family: Roboto, sans-serif;
  flex-direction: column;
  justify-content: center;
  max-width: 264px;
}


.fade-enter-active, .fade-leave-active {
transition: 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity:0;
  transform: scale(0.3);
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

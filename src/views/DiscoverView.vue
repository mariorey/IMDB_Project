<template>
  <div class="discover">
    <Transition name="fade" @after-leave="showQuestion=2">
      <CustomQuiz
          question="Are you an Old Schooler or you follow the latest trends?"
          :options="[
        {
          image: 'https://hips.hearstapps.com/hmg-prod/images/msdgowi-ec001-1551470524.jpg',
          title: 'Old School',
          value: '2000'
        },
        {
          image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/marvels-avengers-2750719.jpg?tf=3840x',
          title: 'Trend',
          value: '2023'
        }
      ]" :onOptionSelected="selectOption"
          v-show="showQuestion==1"/>
    </Transition>
    <Transition name="fade" @after-leave="showQuestion=3">
      <CustomQuiz
          question="What are you in the mood for?"
          :options="[
        {
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Comedy_film_icon.svg/1024px-Comedy_film_icon.svg.png',
          title: 'Laugh my a** off',
          value: '35'
        },
        {
          image: 'https://images-prod.anothermag.com/779/azure/another-prod/410/6/416736.jpg',
          title: 'Be frightened!',
          value: '27'
        }
      ]" :onOptionSelected="selectOption"
          v-show="showQuestion==2"/>
    </Transition>
    <Transition name="fade" @after-leave="showQuestion=4">
      <CustomQuiz
          question="How much available time do you have?"
          :options="[
        {
          image: 'https://cdn-icons-png.flaticon.com/512/6520/6520467.png',
          title: 'Less than 2 hours',
          value: '120'
        },
        {
          image: 'https://static.vecteezy.com/system/resources/previews/010/927/281/non_2x/two-hour-arrow-icon-on-white-background-2-hours-sign-timer-symbol-flat-style-vector.jpg',
          title: 'More than 2 hours',
          value: '300'
        }
      ]" :onOptionSelected="selectOption"
          v-show="showQuestion==3"/>
    </Transition>
    <Transition name="fade" @after-leave="showQuestion=5">
        <CustomQuiz
            question="How would you describe yourself?"
            :options="[
        {
          image: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/646987-jasin-boland-c-2012-warner-bros-entertainment-inc-54e2f8c553776eafbfd8ede11121a700.jpg',
          title: 'I take action',
          value: '28'
        },
        {
          image: 'https://ugc.futurelearn.com/uploads/images/90/b7/90b74c5c-1783-4192-8ff1-d65ded09ca5f.jpg',
          title: 'I am a observer',
          value: '18'
        }
      ]" :onOptionSelected="selectOption"
            v-show="showQuestion==4"/>
      </Transition>
      <Transition name="fade">
      <div class="card-wrapper" v-show="showQuestion==5 && discover !== undefined">
        <h2>This is what we have for you</h2>
        <CustomCard v-if="discover" v-bind:title="discover.title" v-bind:image-src="'https://image.tmdb.org/t/p/w500' + discover.poster_path"/>
      </div>
    </Transition>
  </div>

</template>
<script>
import { defineComponent } from "vue";
import CustomQuiz from "@/components/CustomQuiz.vue";
import CustomCard from "@/components/CustomCard.vue";
import {mapState} from "vuex";

export default defineComponent({
  components: { CustomQuiz, CustomCard },
  data() {
    return {
      selectedOption:[] ,
      showQuestion: 1,
    };
  },
  computed:{
    ...mapState(['discover']),
  },
  methods: {
    selectOption(value) {
      this.selectedOption.push(value);
      this.showQuestion = 0;
      if(this.selectedOption.length == 4){
        this.$store.dispatch('fetchDiscover', this.selectedOption);
      }
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

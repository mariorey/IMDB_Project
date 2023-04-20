<template>
  <div class="sliding" v-if="toggle">
    <button class="left" v-on:click="scrollLeftButton"> &lt; </button>
    <div class="scroll" ref="scroll" @mousedown="startDragging" @mousemove="dragging" @mouseup="stopDragging">
      <div class="item-list">
        <CustomCard class="results__card" v-for="film in films" v-bind:key="film.id" v-bind:title="film.originalTitle" v-bind:rating="film.averageRating.toString()" v-bind:image-src="film.imageUrl" ></CustomCard>
      </div>
    </div>
    <button class="right" v-on:click="scrollRight"> > </button>
  </div>
</template>

<script>
import {mapState} from "vuex";
import CustomCard from "@/components/CustomCard.vue";

export default {
  name: "CustomResults",
  components: {CustomCard},
  computed: {
    ...mapState(['films']),
    toggle(){

      return this.films.length > 0
    }
  },
  data() {
    return {
      isDragging: false,
      startX: null,
      scrollLeft: null
    }
  },
  methods: {
    scrollLeftButton() {
      let scroll = document.querySelector(".scroll");
      scroll.style.scrollBehavior = "smooth"
      scroll.scrollLeft -= 1000;
      scroll.style.scrollBehavior = ""

    },
    scrollRight() {
      let scroll = document.querySelector(".scroll");
      scroll.style.scrollBehavior = "smooth"
      scroll.scrollLeft += 1000;
      scroll.style.scrollBehavior = ""
    },
    startDragging(e) {
      this.isDragging = true;
      this.startX = e.clientX - this.$refs.scroll.offsetLeft;
      this.scrollLeft = this.$refs.scroll.scrollLeft;
    },
    dragging(e) {
      if (!this.isDragging) return;
      e.preventDefault();
      const x = e.clientX - this.$refs.scroll.offsetLeft;
      const distance = x - this.startX;
      this.$refs.scroll.scrollLeft = this.scrollLeft - distance;
    },
    stopDragging() {
      this.isDragging = false;
    }
  },
}
</script>

<style scoped lang="scss">

.sliding{
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  position:relative;
  min-width:80%;
  width:90vw;
  max-width: 80vw;
  margin-top: 1em;
  margin-bottom: 6em;
}

.scroll {
  display: flex;
  flex: 100%;
  flex-flow: row nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar{
    display: none;
  }

}
.scroll > * {
  flex: 0 0 auto;
}
.item-list{
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
}

.right {
  position: absolute;
  right: -10px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  cursor:pointer;
  font-size: 2em;
  font-weight: bold;
  font-family: "Andale Mono", sans-serif;
  height: 2em;
  width: 1.5em;
  border: 1px solid white;
  border-radius: 5px;
  &:hover{
    color: rgba(255,0,0,0.8)
  }
}

.left {
  position: absolute;
  left: -10px;
  cursor:pointer;
  z-index:1;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
  font-weight: bold;
  font-family: "Andale Mono", sans-serif;
  height: 2em;
  width: 1.5em;
  border: 1px solid white;
  border-radius: 5px;
  &:hover{
    color: rgba(255,0,0,0.8)
  }
}

.results__card{
  max-width:270px;
  max-height: 470px;
}

@media (max-width: 1024px) {
  .sliding{
    max-width: 90%;
  }
  .scroll{


  }

}

</style>
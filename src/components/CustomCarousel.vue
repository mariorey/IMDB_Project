<script lang="ts">
import CustomCard from "@/components/CustomCard.vue";
import CardPopup from "@/components/CardPopup.vue";
import {mapState} from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomCarousel",
  components: {CustomCard, CardPopup},
  data() {
    return {
      isDragging: false,
      startX: 0,
      scrollLeft: 0
    }
  },
  computed:{
    ...mapState(['trendings']),
  },
  mounted() {
    this.$store.dispatch('fetchTrending')

  },
  methods: {
    scrollLeftButton(): void {
      let scroll = document.querySelector(".scroll") as HTMLElement;
      scroll.style.scrollBehavior = "smooth"
      scroll.scrollLeft -= 1000;
      scroll.style.scrollBehavior = ""

    },
    scrollRight(): void {
      let scroll = document.querySelector(".scroll") as HTMLElement;
      scroll.style.scrollBehavior = "smooth"
      scroll.scrollLeft += 1000;
      scroll.style.scrollBehavior = ""
    },
    startDragging(e: MouseEvent): void {
      this.isDragging = true;
      this.startX = e.clientX - (this.$refs.scroll as HTMLElement).offsetLeft;
      this.scrollLeft = (this.$refs.scroll as HTMLElement).scrollLeft;
    },
    dragging(e: MouseEvent): void {
      if (!this.isDragging) return;
      e.preventDefault();
      const x = e.clientX - (this.$refs.scroll as HTMLElement).offsetLeft;
      const distance = x - this.startX;
      (this.$refs.scroll as HTMLElement).scrollLeft = this.scrollLeft - distance;
    },
    stopDragging() {
      this.isDragging = false;
    },
  },
})
</script>

<template>
  <div class="sliding">
    <button class="left" v-on:click="scrollLeftButton"> &lt; </button>
    <div class="scroll" ref="scroll" @mousedown="startDragging" @mousemove="dragging" @mouseup="stopDragging">
      <div class="item-list">
        <CardPopup class="results__card" v-for="film in trendings" v-bind:film="film"/>
      </div>
    </div>
    <button class="right" v-on:click="scrollRight"> > </button>
  </div>
</template>



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
  right: -20px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  cursor:pointer;
  font-size: 2em;
  font-weight: bold;
  font-family: "Andale Mono",sans-serif;
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
  left: -20px;
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
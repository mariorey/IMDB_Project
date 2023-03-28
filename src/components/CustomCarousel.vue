<script>
import CustomCard from "@/components/CustomCard.vue";
export default {
  name: "CustomCarousel",
  components: {CustomCard},
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

<template>
  <div class="sliding">
    <button class="left" v-on:click="scrollLeftButton"> &lt; </button>
    <div class="scroll" ref="scroll" @mousedown="startDragging" @mousemove="dragging" @mouseup="stopDragging">
    <div class="item-list">
        <CustomCard imageSrc="https://pics.filmaffinity.com/Malditos_vecinos-933128749-large.jpg" rating="3.5" title="Neighbors"/>
        <CustomCard imageSrc="https://upload.wikimedia.org/wikipedia/en/2/29/Finding_Nemo.jpg" title="Nemo" rating="4.2"/>
        <CustomCard title="Alice in wonderland" rating="3" imageSrc="https://lumiere-a.akamaihd.net/v1/images/p_aliceinwonderland_19875_ad409a49.jpeg"/>
        <CustomCard title="Bullet train" rating="4" imageSrc="https://pics.filmaffinity.com/Bullet_Train-639045112-large.jpg"/>
        <CustomCard title="Don't breathe" rating="2.98" imageSrc="https://upload.wikimedia.org/wikipedia/en/4/41/Don%27t_Breathe_%282016_film%29.png"/>
        <CustomCard title="Matrix" rating="4" imageSrc="https://pics.filmaffinity.com/Matrix-155050517-large.jpg"/>
        <CustomCard title="This is the end" rating="2.5" imageSrc="https://pics.filmaffinity.com/Juerga_hasta_el_fin-477127857-large.jpg"/>
        <CustomCard title="Project X" imageSrc="https://m.media-amazon.com/images/M/MV5BMTc1MTk0Njg4OF5BMl5BanBnXkFtZTcwODc0ODkyNw@@._V1_.jpg"/>
        <CustomCard title="Harry Potter" imageSrc="https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg"/>
        <CustomCard title="Citizen Kane" imageSrc="https://upload.wikimedia.org/wikipedia/commons/c/c0/Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg"/>
        <CustomCard title="Memento" imageSrc="https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"/>
        <CustomCard title="Interstellar" imageSrc="https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"/>
      <CustomCard title="The Hunger Games: Mockingjay" rating="3.8" imageSrc="https://m.media-amazon.com/images/M/MV5BMTcxNDI2NDAzNl5BMl5BanBnXkFtZTgwODM3MTc2MjE@._V1_.jpg"/>
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
  right: 0;
}

.left {
  position: absolute;
  left: 0;
  z-index:1
}

@media (max-width: 1024px) {
  .sliding{
   max-width: 90%;
  }
  .scroll{


  }

}

</style>
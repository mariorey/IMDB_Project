<template>
  <span class="arrow">⇩</span>
  <div class="wheel__container">
    <button id="spin" v-on:click="spin">Spin</button>
    <div class="container">
      <div class="one"><img v-if="options[0]?.poster_path" v-bind:src="'https://image.tmdb.org/t/p/w500' + options[0]?.poster_path"> </div>
      <div class="two"><img v-if="options[1]?.poster_path" v-bind:src="'https://image.tmdb.org/t/p/w500' + options[1]?.poster_path"></div>
      <div class="three"><img v-if="options[2]?.poster_path" v-bind:src="'https://image.tmdb.org/t/p/w500' + options[2]?.poster_path"></div>
      <div class="four"><img v-if="options[3]?.poster_path" v-bind:src="'https://image.tmdb.org/t/p/w500' + options[3]?.poster_path"></div>
      <div class="five"><img v-if="options[4]?.poster_path" v-bind:src="'https://image.tmdb.org/t/p/w500' + options[4]?.poster_path"></div>
      <div class="six"><img v-if="options[5]?.poster_path" v-bind:src="'https://image.tmdb.org/t/p/w500' + options[5]?.poster_path"></div>
      <div class="seven"><img v-if="options[6]?.poster_path" v-bind:src="'https://image.tmdb.org/t/p/w500' + options[6]?.poster_path"></div>
      <div class="eight"><img v-if="options[7]?.poster_path" v-bind:src="'https://image.tmdb.org/t/p/w500' + options[7]?.poster_path"></div>
    </div>
  </div>

</template>

<script>

export default {
  name: "CustomRoulette",
  props: {
    options: {
      type: Array,
      default: []
    },
  },
  data() {
    return {
      optionIndex : 0,
      times: 0
    }
  },
  methods: {
    spin() {
      this.times+=1;
      let prevOptionIndex = this.optionIndex;
      do {
        this.optionIndex = Math.floor(Math.random() * 8);
      } while (this.optionIndex === prevOptionIndex);

      let rotationAngle = (this.times * 360 * 10) - (45 * this.optionIndex);

      let container = document.querySelector(".container");
      container.style.transform = "rotate(" + rotationAngle + "deg)";
      setTimeout(() => {
        this.$emit('spin-complete', this.options[this.optionIndex])
      }, 5000)

    },
  }
}
</script>

<style>
*{
  box-sizing:border-box;
}

.wheel__container{
  margin:0;
  padding:0;
  display:flex;
  align-items:center;
  justify-content: center;
  overflow:hidden;
}

.container{
  width:500px;
  height:500px;
  background-color: #ccc;
  border-radius:50%;
  border:15px solid #dde;
  position: relative;
  overflow: hidden;
  transition: 5s;
}

.container div{
  height:50%;
  width:200px;
  position: absolute;
  clip-path: polygon(100% 0 , 50% 100% , 0 0 );
  transform:translateX(-50%);
  transform-origin:bottom;
  text-align:center;
  display:flex;
  align-items: center;
  justify-content: center;
  font-size:20px;
  font-weight:bold;
  font-family:sans-serif;
  color:#fff;
  left:135px;
}

.container .one{
  background-color: #3f51b5;
  left:50%;
}
.container .two{
  background-color: #ff9800;
  transform: rotate(45deg);
}
.container .three{
  background-color: #e91e63;
  transform:rotate(90deg);
}
.container .four{
  background-color: #4caf50;
  transform: rotate(135deg);
}
.container .five{
  background-color: #009688;
  transform: rotate(180deg);
}
.container .six{
  background-color: #795548;
  transform: rotate(225deg);
}
.container .seven{
  background-color: #9c27b0;
  transform: rotate(270deg);
}
.container .eight{
  background-color: #f44336;
  transform: rotate(315deg);
}

.arrow{
  position: absolute;
  font-size: 3em;
  top:90px;
  left:50%;
  transform: translateX(-50%);
  color:#fff;
}

#spin{
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  z-index:10;
  background-color: #e2e2e2;
  text-transform: uppercase;
  border:8px solid #fff;
  font-weight:bold;
  font-size:20px;
  color:#a2a2a2;
  width: 80px;
  height:80px;
  font-family: sans-serif;
  border-radius:50%;
  cursor: pointer;
  outline:none;
  letter-spacing: 1px;
  
}

</style>
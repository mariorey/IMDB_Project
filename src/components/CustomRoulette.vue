<template>
  <span class="arrow">⇩</span>
  <div class="wheel__container">
    <div class="button__container">
    <button id="spin" class="spin" v-on:click="spin">Spin</button>
    </div>
    <div class="options__container">
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

      let container = document.querySelector(".options__container");
      container.style.transform = "rotate(" + rotationAngle + "deg)";
      setTimeout(() => {
        this.$emit('spin-complete', this.options[this.optionIndex])
      }, 5000)

    },
  }
}
</script>

<style lang="scss">

.wheel__container{
  margin:0;
  padding:0;
  display:grid;
  width: fit-content;
  justify-items: center;
  align-items: center;
  margin-top:2em;
  overflow:hidden;
}

.button__container {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index:2;
  transform: translate(-50%, -50%);
}

.options__container{
  width:500px;
  height:500px;
  background-color: #ccc;
  border-radius:50%;
  border:15px solid #dde;
  position: relative;
  overflow: hidden;
  transition: 5s;
}

.options__container div{
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
  & img{
  width:200px;
    }
}

.options__container .one{
  background-color: #f94144;
  left:50%;
}
.options__container .two{
  background-color: #f3722c;
  transform: rotate(45deg);
}
.options__container .three{
  background-color: #f8961e;
  transform:rotate(90deg);
}
.options__container .four{
  background-color: #f9c74f;
  transform: rotate(135deg);
}
.options__container .five{
  background-color: #90be6d;
  transform: rotate(180deg);
}
.options__container .six{
  background-color: #43aa8b;
  transform: rotate(225deg);
}
.options__container .seven{
  background-color: #577590 ;
  transform: rotate(270deg);
}
.options__container .eight{
  background-color: #ff6961;
  transform: rotate(315deg);
}

.arrow{
  position: absolute;
  font-size: 3em;
  top:-30px;
  left:28.6%;
  transform: translateX(-50%);
  color:#fff;
}

.spin{
  position: relative;
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
  animation: pulse 2s infinite;
}

@media (max-width: 1024px) {
.arrow{
  left:50%;
}
  .options__container{
    width:350px;
    height:350px;
  }
  .options__container div{
    width:150px;
    left:85px;
    & img{
      width:150px;
    }
  }

}

@keyframes pulse {
  0% {
    transform: scale3d(1, 1, 1);
  }
  50% {
    transform: scale3d(1.09, 1.09, 1.09);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}

</style>
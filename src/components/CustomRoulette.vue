<template>
  <!-- Circle graphic -->
  <div id="container1" class="container1">
    <div id="wheel" class="wheel">
      <div>
        <span class="span1"><p>😊</p></span>
        <span class="span2"><p>😝</p></span>
        <span class="span3"><p>😍</p></span>
        <span class="span4"><p>😎</p></span>

        <span class="span5"><p>🍩</p></span>
        <span class="span6"><p>🍭</p></span>
        <span class="span7"><p>🍰</p></span>
        <span class="span8"><p>🍬</p></span>
      </div>
    </div>

    <button class="spin" onclick="letsSpin()">SPIN</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4', 'Opción 5'], // Ejemplo de ítems de muestra
      selected: null, // El ítem seleccionado automáticamente
    };
  },
  methods: {
    spin() {
      // Lógica para girar la ruleta y seleccionar un ítem automáticamente
      // Puedes implementar esta lógica según tus necesidades específicas
      // Aquí hay un ejemplo básico para seleccionar un ítem al azar:
      const randomIndex = Math.floor(Math.random() * this.items.length);
      this.selected = this.items[randomIndex];
    },
    letsSpin() {

  var x = 1024; //min value
  var y = 9999; //max value

  var deg = Math.floor(Math.random() * (x - y)) + y;

  document.getElementById('container1').style.transform = "rotate("+deg+"deg)";

  }
  },
};
</script>

<style scoped lang="css">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

.container1 {
  position: relative;
  width: 500px;
  height: 500px;
}
.wheel {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 50%;
  border: 10px solid #fff;
  overflow: hidden;
  transition: all ease 4s;
}
span {
  width: 50%;
  height: 50%;
  display: inline-block;
  position: absolute;
}
.span1 {
  clip-path: polygon(0 92%, 100% 50%, 0 8%);
  background-color: #ff1f1f;
  top: 120px;
  left: 0;
}
.span2 {
  clip-path: polygon(100% 92%, 0 50%, 100% 8%);
  background-color: #19e3cf;
  top: 120px;
  right: 0;
}
.span3 {
  clip-path: polygon(50% 0%, 8% 100%, 92% 100%);
  background-color: #9e0bf3;
  bottom: 0;
  left: 120px;
}
.span4 {
  clip-path: polygon(50% 100%, 92% 0, 8% 0);
  background-color: #15b600;
  top: 0;
  left: 120px;
}
.span5 {
  clip-path: polygon(0 40%, 100% 0%, 60% 100%);
  background-color: #1f26ff;
  bottom: -2px;
  right: 242px;
}
.span6 {
  clip-path: polygon(40% 100%, 0 0%, 100% 40%);
  background-color: #ff5a5a;
  bottom: -2px;
  left: 242px;
}
.span7 {
  clip-path: polygon(60% 0, 100% 100%, 0 60%);
  background-color: #57fff1;
  top: -2px;
  right: 242px;
}
.span8 {
  clip-path: polygon(0 100%, 100% 60%, 40% 0);
  background-color: #ff9612;
  top: -2px;
  left: 242px;
}
span p{
  width: 65px;
  height: 65px;
  font-size: 60px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.spin {
  position: absolute;
  top: 43%;
  left: 43%;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: black;
  color: #fff;
  box-shadow: 0 5px 20px #000;
  font-weight: bold;
  font-size: 22px;
  cursor: pointer;
  animation: pulse 2s infinite;
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
.spin:active {
  width: 70px;
  height: 70px;
  font-size: 20px;
  background: #ffe605;
}
</style>
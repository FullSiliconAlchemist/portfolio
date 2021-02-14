<template>  
  <canvas id="gameCanvas"></canvas>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BabylonService from '../services/babylon.service'

@Component
export default class Hero extends Vue {
  // @Prop() private canvas!: HTMLCanvasElement | null;

  mounted() {
    const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
    const babylon = new BabylonService();
    babylon.serveScene(canvas);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
canvas {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
}
canvas:focus{
  outline:none;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

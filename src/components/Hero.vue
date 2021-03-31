<template>
  <div>
      <div id="loadingScreen"></div>
      <canvas id="gameCanvas"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BabylonService from '../services/babylon.service'

@Component
export default class Hero extends Vue {
  // @Prop() private isLoading = true;

  canvas!: HTMLCanvasElement;
  babylon!: BabylonService;

  mounted(): void {
    this.canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
    this.babylon = new BabylonService();
    this.babylon.serveScene(this.canvas);
  }

  // created(): void {
  //   console.log('Vue created');
  // }

  // destroy(): void {
  //   console.log('Vue destroyed');
  // }
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

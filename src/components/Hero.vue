<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <canvas id="canv"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, Mesh, MeshBuilder } from "@babylonjs/core";

@Component
export default class Hero extends Vue {
  @Prop() private msg!: string;

  constructor() {
    super();
    // create the canvas html element and attach it to the webpage
    const canvas: HTMLCanvasElement = document.getElementById("canv") as HTMLCanvasElement;
    // const canvas = document.createElement("canvas");
    // canvas.style.width = "100%";
    // canvas.style.height = "100%";
    // canvas.style.position = "absolute";
    // canvas.style.zIndex = "-1";
    // canvas.style.top = "0";
    // canvas.id = "gameCanvas";
    // document.body.appendChild(canvas);

    // initialize babylon scene and engine
    const engine = new Engine(canvas, true);
    const scene = new Scene(engine);
    const camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    const light1: HemisphericLight = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
    const sphere: Mesh = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);
    // hide/show the Inspector
    window.addEventListener("keydown", (ev) => {
        // Shift+Ctrl+Alt+I
        if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.keyCode === 73) {
            if (scene.debugLayer.isVisible()) {
                scene.debugLayer.hide();
            } else {
                scene.debugLayer.show();
            }
        }
    });
    // run the main render loop
    engine.runRenderLoop(() => {
        scene.render();
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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

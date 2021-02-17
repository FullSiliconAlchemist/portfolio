import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, Mesh, MeshBuilder, SceneLoader, Color4 } from "@babylonjs/core";
// import "@babylonjs/loaders/glTF"

export default class BabylonService {

    public serveScene(canvas: HTMLCanvasElement): void {

        // initialize babylon scene and engine
        const engine = new Engine(canvas, true);
        const scene = new Scene(engine);
        const camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI * 1.2, Math.PI / 2.5, 30, Vector3.Zero(), scene);
        scene.clearColor = new Color4(0.02, 0.05, 0.08, 1);

        // No default loading screen, should create my own
        SceneLoader.ShowLoadingScreen = false;

        console.log(window.scrollY);
        // No camera movements unless the "check" button works
        // camera.attachControl(canvas, true);

        SceneLoader.AppendAsync('../assets/', 'abstractLoop_24.glb', scene, (model) => {
            console.log(model)
        });

        const light1: HemisphericLight = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
        // const sphere: Mesh = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);

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
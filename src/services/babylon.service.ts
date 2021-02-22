import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, SceneLoader, Color4, ILoadingScreen } from "@babylonjs/core";

export class CustomLoadingScreen implements ILoadingScreen {

    loadingUIBackgroundColor!: string;
    loadingUIText: string;

    constructor(loadingText: string) {
        this.loadingUIText = loadingText;
    }

    public displayLoadingUI(): void {
        
        alert(this.loadingUIText);
    }

    public hideLoadingUI(): void {
        alert("Loaded!");
    }
}

export default class BabylonService {

    public async serveScene(canvas: HTMLCanvasElement): Promise<void> {

        // initialize babylon scene and engine
        const engine = new Engine(canvas, true);
        const scene = new Scene(engine);
        const camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI * 1.2, Math.PI / 2.5, 10, Vector3.Zero(), scene);
        scene.clearColor = new Color4(0.02, 0.05, 0.08, 1);

        // No default loading screen, should create my own
        const loadingScreen = new CustomLoadingScreen("I'm loading!!");
        // replace the default loading screen
        engine.loadingScreen = loadingScreen;
        // show the loading screen
        engine.displayLoadingUI();

        // console.log(window.scrollY);
        // No camera movements unless the "check" button works
        camera.attachControl(canvas, true);

        SceneLoader.ImportMeshAsync('', '../assets/', 'untitled.glb', scene)
        .then((meshes) => {
            meshes.meshes.map((mesh) => {
                if (mesh.name === '__root__') {
                    mesh.translate(new Vector3(0, 1, 0), -1.5);
                }
            });
            engine.hideLoadingUI();
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


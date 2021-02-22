import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, SceneLoader, Color4, ILoadingScreen } from "@babylonjs/core";

export class CustomLoadingScreen implements ILoadingScreen {

    loadingUIBackgroundColor!: string;
    loadingUIText: string;

    loadingDiv!: HTMLElement | null;

    constructor(loadingText: string) {
        this.loadingUIText = loadingText;
        this.loadingDiv = document.getElementById('customLoadingScreen');
    }

    public displayLoadingUI(): void {
        if (this.loadingDiv === null || this.loadingDiv === undefined) {
            this.loadingDiv = document.createElement('div');
            this.loadingDiv.id = 'customLoadingScreen';
            this.loadingDiv.innerHTML = this.loadingUIText;
            const customLoadingCss = document.createElement('style');
            customLoadingCss.type = 'text/css';
            customLoadingCss.innerHTML = 
                `#customLoadingScreen {
                    position: absolute;
                    background-color: black;
                    color: white;
                    text-align: center;
                    z-index: 100;
                    width: 100%;
                    height: 100vh;
                    top: 0;
                }`;
            document.getElementsByTagName('head')[0].appendChild(customLoadingCss);
        } else {
            console.log(this.loadingDiv);
            this.loadingDiv.style.display = '';
        }

        // Hide document overflow
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';

        document.body.appendChild(this.loadingDiv);
    }

    public hideLoadingUI(): void {
        const loading = document.getElementById('customLoadingScreen');
        if (loading !== null) {
            loading.style.display = 'none';
        }
        else {
            console.error('Scene loaded. Loading UI failed.');   
        }
        document.getElementsByTagName('body')[0].style.overflow = '';
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

        SceneLoader.ImportMeshAsync('', '../assets/', 'untitled.glb', scene)
        .then((meshes) => {
            meshes.meshes.map((mesh) => {
                if (mesh.name === '__root__') {
                    mesh.translate(new Vector3(0, 1, 0), -1.5);
                }
            });
            engine.hideLoadingUI();
        });

        // run the main render loop
        engine.runRenderLoop(() => {
            scene.render();
        });
    }
}


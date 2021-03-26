import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, SceneLoader, Color4, ILoadingScreen, MeshBuilder, AbstractMesh, Material, StandardMaterial } from "@babylonjs/core";

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
                    z-index: 1000;
                    width: 100%;
                    height: 100vh;
                    top: ${window.scrollY}px;
                }`;
            document.getElementsByTagName('head')[0].appendChild(customLoadingCss);
        } else {
            console.log(this.loadingDiv);
            this.loadingDiv.style.display = '';
        }

        // Hide document overflow
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        document.getElementsByTagName('html')[0].style.overflow = 'hidden';

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
        document.getElementsByTagName('html')[0].style.overflow = '';
    }
}

export default class BabylonService {

    public async serveScene(canvas: HTMLCanvasElement): Promise<void> {

        // initialize babylon scene and engine
        const engine = new Engine(canvas, true);
        const scene = new Scene(engine);
        const camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI * 0.6, Math.PI / 2, 35, Vector3.Zero(), scene);
        scene.clearColor = new Color4(0.02, 0.05, 0.08, 1);

        // No default loading screen, should create my own
        const loadingScreen = new CustomLoadingScreen("I'm loading!!");
        // replace the default loading screen
        engine.loadingScreen = loadingScreen;
        // show the loading screen
        engine.displayLoadingUI();

        // No camera movements unless the "check" button works
        // camera.attachControl(canvas, true);

        const light1: HemisphericLight = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
        let mad: AbstractMesh;

        // scene.debugLayer.show();

        // window.addEventListener("keydown", (ev) => {
        //     if (ev.shiftKey && ev.ctrlKey && ev.altKey) {
        //         if (scene.debugLayer.isVisible()) {
        //             scene.debugLayer.hide();
        //         } else {
        //             scene.debugLayer.show();
        //         }
        //     }
        // });

        SceneLoader.ImportMeshAsync('', '../assets/', 'mad.glb', scene)
        .then((meshes) => {
            meshes.meshes.map((mesh) => {
                if (mesh.name === '__root__') {
                    mad = mesh;
                    mad.scaling._x = 3
                    mad.scaling._y = 3
                    mad.scaling._z = 3
                    mad.rotate(new Vector3(0, 1, 0), 180)
                }
            });
            engine.hideLoadingUI();
        });

        // Create array of points to describe the curve
        // -10 + r * Math.cos(i * 4 * Math.PI / (2 * n))
        const points: Vector3[] = [];
        const n = 5000; // number of points
        const r = 10; //radius
        for (let i = 0; i < n ; i++) {
            const point = new Vector3(
                -r * Math.sin(i * 4 * Math.PI / (2 * n)),
                Math.cos(0 * 4 * Math.PI / (2 * n)),
                5
            )
            points.push(point);
        }

        const options = {
            points,
            updatable: true
        }

        // Creation of a lines mesh
        const lines = MeshBuilder.CreateLines("lines", options, scene);
        lines.alpha = 0;

        // let last = window.scrollY;            
        // run the main render loop
        let pos = 0;

        engine.runRenderLoop(() => {
            if (mad) {
                // pos = ++pos % points.length;
                pos = (Math.ceil(window.scrollY)) % points.length;
                mad.position = points[pos];
                mad.rotate(new Vector3(0, 1, 0), -0.001);
            }
            scene.render();
        });
    }
}


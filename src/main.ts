import "./style.css"
import { ambientLight } from "./modules/lights";
import { floor } from "./modules/floor";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { graves } from "./modules/graves";
import { house } from "./modules/house";
import { houseExteriorWalls } from "./modules/houseExteriorWalls";
import { resizeWindow } from "./utils/resizeWindow";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { perspectiveCamera } from "./modules/camera";
import { webGLRenderer } from "./utils/webGLRenderer";
import {
	Clock,
	Fog,
	FontLoader,
	Mesh,
	MeshStandardMaterial,
	PCFSoftShadowMap,
	Scene,
	TextGeometry
} from "three";

// Canvas
const canvas = document.querySelector<HTMLCanvasElement>(".webgl")!;

// Scene
const scene =  new Scene();

// Render Size
const size = {
	width: window.innerWidth,
	height: window.innerHeight
};

// Camera
const camera = perspectiveCamera(size.width, size.height);
scene.add(camera);

// Renderer
const renderer = webGLRenderer(size.width, size.height, canvas);
renderer.setClearColor("#673ab7")
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFSoftShadowMap;

// Resize event Listener
window.addEventListener("resize", () => resizeWindow(size.width, size.height, camera, renderer));

//Controls
const controls = new OrbitControls(camera, canvas);
controls.enabled = false;

// Add elements to Scene
scene.add(ambientLight, floor, house, houseExteriorWalls, graves);

// FOG
const fog = new Fog("#673ab7", 1, 15);
scene.fog = fog;

// Text
const fontLoader = new FontLoader();
fontLoader.load(
	"/fonts/halloween_night_regular.json",
	(font) => {
	 const textGeometry = new TextGeometry("Haunted House", {
			font,
			size: 0.5,
			height: 0.2,
			curveSegments: 5,
			bevelEnabled: true,
			bevelThickness: 0.03,
			bevelSize: 0.02,
			bevelOffset: 0,
			bevelSegments: 4
		});
	textGeometry.center();
	const material = new MeshStandardMaterial({color: "#000"});
	const text = new Mesh(textGeometry, material);
	text.position.y = 1.3;
	text.position.z = 3;
	scene.add(text);
});

// Ghost
let ghost1: Scene;
let ghost2: Scene;
let ghost3: Scene;
const loader = new GLTFLoader();
loader.load(
	"/models/ghost.gltf",
	(gltf: any) => {
		gltf.scene.children[0].position.x = 0;
		gltf.scene.children[0].position.y = 0.5;
		gltf.scene.children[0].position.z = 0;
		
		gltf.scene.children[1].position.x = 0;
		gltf.scene.children[1].position.y = 0.8;
		gltf.scene.children[1].position.z = 0;
		
		gltf.scene.children[0].scale.set(0.12,0.12,0.12);
		gltf.scene.children[1].scale.set(0.17,0.17,0.17);
		
		gltf.scene.children[0].material.color = { r: 8, g: 8, b:8 };
		gltf.scene.children[1].material.color = { r: 8, g: 8, b:8 };

		ghost1 = gltf.scene;
		scene.add(ghost1);
	},
	(xhr: ProgressEvent) => console.log( ( xhr.loaded / xhr.total * 100 ) + "% loaded" ),
	() => console.log( "An error happened" )
);
loader.load(
	"/models/ghost.gltf",
	(gltf: any) => {
		gltf.scene.children[0].position.x = 0;
		gltf.scene.children[0].position.y = 0.5;
		gltf.scene.children[0].position.z = 0;
		
		gltf.scene.children[1].position.x = 0;
		gltf.scene.children[1].position.y = 0.8;
		gltf.scene.children[1].position.z = 0;
		
		gltf.scene.children[0].scale.set(0.1,0.1,0.1);
		gltf.scene.children[1].scale.set(0.15,0.15,0.15);
		
		gltf.scene.children[0].material.color = { r: 5, g: 5, b:5 };
		gltf.scene.children[1].material.color = { r: 5, g: 5, b:5 };

		ghost2 = gltf.scene;
		scene.add(ghost2);
	},
	(xhr: ProgressEvent) => console.log( ( xhr.loaded / xhr.total * 100 ) + "% loaded" ),
	() => console.log( "An error happened" )
);
loader.load(
	"/models/ghost.gltf",
	(gltf: any) => {
		gltf.scene.children[0].position.x = 0;
		gltf.scene.children[0].position.y = 0.5;
		gltf.scene.children[0].position.z = 0;
		
		gltf.scene.children[1].position.x = 0;
		gltf.scene.children[1].position.y = 0.8;
		gltf.scene.children[1].position.z = 0;
		
		gltf.scene.children[0].scale.set(0.1,0.1,0.1);
		gltf.scene.children[1].scale.set(0.15,0.15,0.15);
		
		gltf.scene.children[0].material.color = { r: 5, g: 5, b:5 };
		gltf.scene.children[1].material.color = { r: 5, g: 5, b:5 };

		ghost3 = gltf.scene;
		scene.add(ghost3);
	},
	(xhr: ProgressEvent) => console.log( ( xhr.loaded / xhr.total * 100 ) + "% loaded" ),
	() => console.log( "An error happened" )
);

// Animation
const clock = new Clock()
const loop = () => {
	const elapsedTime = clock.getElapsedTime();
 
	// ghost
	if (ghost1 && ghost2 && ghost3) {
		const ghost1Angle = - elapsedTime * 0.1;
		const ghost2Angle = elapsedTime * 0.1;
		const ghost3Angle = - elapsedTime * 0.2;

		ghost1.position.x = Math.cos(ghost1Angle) * (7 + Math.sin(elapsedTime * 0.32));
		ghost1.position.z = Math.sin(ghost1Angle) * (7 + Math.sin(elapsedTime * 0.5));
		
		ghost2.position.x = Math.cos(ghost2Angle) * 5;
		ghost2.position.z = Math.sin(ghost2Angle) * 5;

		ghost3.position.x = Math.cos(ghost3Angle) * 4;
		ghost3.position.z = Math.sin(ghost3Angle) * 4;
	}

	// Update controls
	controls.update();

	// Render
	renderer.render(scene, camera);

	// Call loop again on the next frame
	window.requestAnimationFrame(loop);
};

loop();

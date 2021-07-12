import { PerspectiveCamera, WebGLRenderer } from "three";

/**
* On resize window
*/
export const onResize = (width: number, height: number, camera: PerspectiveCamera, renderer: WebGLRenderer) => {
		// Update size
		width = window.innerWidth;
		height = window.innerHeight;
		
		// Update camera
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
		
		// Update renderer
		renderer.setSize(width, height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}
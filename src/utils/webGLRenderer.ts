import { WebGLRenderer } from "three";

export const webGLRenderer = (width: number, height: number, canvas: HTMLCanvasElement) => {
	const renderer = new WebGLRenderer({
		canvas: canvas
	});
	renderer.setSize(width, height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	renderer.setClearColor("#000000");
	
	return renderer;
}
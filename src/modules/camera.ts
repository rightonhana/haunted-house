import { PerspectiveCamera } from "three";

export const perspectiveCamera = (width: number, height: number) => {
	const camera = new PerspectiveCamera(75, width / height, 0.1, 100);
	camera.position.set(0, 2.8, 8.2);
	return camera;
}
import { Mesh, PlaneGeometry, MeshStandardMaterial } from 'three';

const width = 50;
const height = 50;
const angle = Math.PI * 0.5;
const color = "#455a64";
export const floor = new Mesh(
	new PlaneGeometry(width, height),
	new MeshStandardMaterial({ color })
);
floor.rotation.x = -angle;
floor.position.y = 0;
floor.receiveShadow = true;
import { Group, BoxGeometry, MeshStandardMaterial, Mesh } from "three";

export const graves = new Group();

const graveGeometry = new BoxGeometry(0.6,0.8,0.2);
const graveMaterial = new MeshStandardMaterial({color:"#b2b6b1"});

for (let i = 0; i < 60; i++) {
	const angle = Math.random() * Math.PI * 2;
	const radiusX = 3 + Math.random() * 10;
	const radiusZ = 3 + Math.random() * 2.8;
	const x = Math.sin(angle) * radiusX;
	const z = Math.cos(angle) * radiusZ;

	const grave = new Mesh(graveGeometry, graveMaterial);
	grave.rotation.y = (Math.random() - 0.5) * (- 0.2);
	grave.rotation.z = (Math.random() - 0.5) * 0.4;
	grave.position.x = x;
	grave.position.y = 0.3;
	grave.position.z = z;
	grave.castShadow = true;

	graves.add(grave);
}
import { Group, Mesh, MeshStandardMaterial, CylinderGeometry } from 'three';

export const houseExteriorWalls = new Group();
const left = new Group();
const right = new Group();

const exteriorWallRadius = 0.02;
const exteriorWallHeight = 1;
const exteriorWallGeometry = new CylinderGeometry(exteriorWallRadius, exteriorWallRadius, exteriorWallHeight, 16);
const exteriorWallsMaterial = new MeshStandardMaterial({ color: "#ddd"});

// Right
for (let i = 0; i < 10; i++) {
	const exteriorWall = new Mesh(exteriorWallGeometry, exteriorWallsMaterial);
	exteriorWall.position.y = exteriorWallHeight / 2;
	exteriorWall.position.z = 6;
	exteriorWall.position.x = ((0.3 * i) + 2);
	right.add(exteriorWall)
}
const horizontalWall1 = new Mesh(
	new CylinderGeometry(exteriorWallRadius, exteriorWallRadius, exteriorWallHeight * 3.5, 16),
	new MeshStandardMaterial({ color: "#ddd"})
);
horizontalWall1.rotation.z = Math.PI * 0.5;
horizontalWall1.position.y = exteriorWallHeight - 0.1;
horizontalWall1.position.z = 6;
horizontalWall1.position.x = 3.3;

const horizontalWall2 = new Mesh(
	new CylinderGeometry(exteriorWallRadius, exteriorWallRadius, exteriorWallHeight * 3.5, 16),
	new MeshStandardMaterial({ color: "#ddd"})
);
horizontalWall2.rotation.z = Math.PI * 0.5;
horizontalWall2.position.y = 0.1;
horizontalWall2.position.z = 6;
horizontalWall2.position.x = 3.3;

right.add(horizontalWall1, horizontalWall2);

const externalDoor1 = new Mesh(
	new CylinderGeometry(0.1, 0.1, 1.1, 16),
	new MeshStandardMaterial({ color: "#ddd"})
);
externalDoor1.position.y = 1.1 / 2;
externalDoor1.position.z = 6;
externalDoor1.position.x = 1.6;

right.add(externalDoor1);


// Left
for (let i = 0; i < 10; i++) {
	const exteriorWall = new Mesh(exteriorWallGeometry, exteriorWallsMaterial);
	exteriorWall.position.y = exteriorWallHeight / 2;
	exteriorWall.position.z = 6;
	exteriorWall.position.x = ((-0.3 * i) - 2);
	left.add(exteriorWall)
}
const horizontalWall3 = new Mesh(
	new CylinderGeometry(exteriorWallRadius, exteriorWallRadius, exteriorWallHeight * 3.5, 16),
	new MeshStandardMaterial({ color: "#ddd"})
);
horizontalWall3.rotation.z = Math.PI * 0.5;
horizontalWall3.position.y = exteriorWallHeight - 0.1;
horizontalWall3.position.z = 6;
horizontalWall3.position.x = -3.3;

const horizontalWall4 = new Mesh(
	new CylinderGeometry(exteriorWallRadius, exteriorWallRadius, exteriorWallHeight * 3.5, 16),
	new MeshStandardMaterial({ color: "#ddd"})
);
horizontalWall4.rotation.z = Math.PI * 0.5;
horizontalWall4.position.y = 0.1;
horizontalWall4.position.z = 6;
horizontalWall4.position.x = -3.3;


left.add(horizontalWall3, horizontalWall4);

const externalDoor2 = new Mesh(
	new CylinderGeometry(0.1, 0.1, 1.1, 16),
	new MeshStandardMaterial({ color: "#ddd"})
);
externalDoor2.position.y = 1.1 / 2;
externalDoor2.position.z = 6;
externalDoor2.position.x = -1.6;

left.add(externalDoor2);

houseExteriorWalls.add(left, right);
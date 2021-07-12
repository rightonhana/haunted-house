import { Group, Mesh, BoxGeometry, PlaneGeometry, MeshStandardMaterial, ConeGeometry, CylinderGeometry } from 'three';
import { bushes, houseBushes } from './bushes';
import { doorLight } from './lights';

export const house = new Group() as Group & {children: Mesh[]};

house.position.z = 0;

 /**
  * Fist Floor
  */
const firstFloorWidth = 6;
const firstFloorHeight = 2;
const firstFloorDepth = 4;
const firstFloorColor = "#555";

const firstFloor = new Mesh(
	new BoxGeometry(firstFloorWidth, firstFloorHeight, firstFloorDepth),
	new MeshStandardMaterial({ color: firstFloorColor })
);
firstFloor.position.y = firstFloorHeight / 2;

 /**
  * Second Floor
  */
const secondFloorWidth = 6;
const secondFloorHeight = 2;
const secondFloorDepth = 3;
const secondFloorColor = "#555";
const secondFloor = new Mesh(
	new BoxGeometry(secondFloorWidth, secondFloorHeight, secondFloorDepth),
	new MeshStandardMaterial({ color: secondFloorColor })
);
secondFloor.position.y = firstFloorHeight + 1;
secondFloor.position.z = -(firstFloorDepth / 8);

/**
 * Tower
 */
const towerHeight = 2;
const towerRadius = 0.8;
const tower = new Mesh(
	new CylinderGeometry(towerRadius, towerRadius, towerHeight, 16),
	//new BoxGeometry(2, towerHeight, 2),
	new MeshStandardMaterial({ color: secondFloorColor})
);
tower.position.y = firstFloorHeight * 1.5;
tower.position.z = 1.5;


/**
 * Door
 */
const doorWidth = 0.8;
const doorHeight = 1.5;
const doorWithSubdivision = 100;
const doorHeightSubdivision = 100;
const doorColor = "#212121";

const door = new Mesh(
	new PlaneGeometry(doorWidth, doorHeight, doorWithSubdivision, doorHeightSubdivision),
	new MeshStandardMaterial({ color: doorColor })
);
door.position.y = doorHeight / 2;
door.position.z = 2 + 0.01;

/**
 * Windows
 */
const windowWithSubdivision = 100;
const windowHeightSubdivision = 100;
const windowColor = "#222";

const window1 = new Mesh(
	new PlaneGeometry(1.5, 0.5, windowWithSubdivision, windowHeightSubdivision),
	new MeshStandardMaterial({ color: windowColor })
);
window1.position.y = 3.2;
window1.position.x = -1.8;
window1.position.z = 1.01;

const window2 = new Mesh(
	new PlaneGeometry(1.5, 0.5, windowWithSubdivision, windowHeightSubdivision),
	new MeshStandardMaterial({ color: windowColor })
);
window2.position.y = 3.2;
window2.position.x = 1.8;
window2.position.z = 1.01;

const window3 = new Mesh(
	new PlaneGeometry(2, 1, windowWithSubdivision, windowHeightSubdivision),
	new MeshStandardMaterial({ color: windowColor })
);
window3.position.y = 1;
window3.position.x = 1.8;
window3.position.z = 2.01;

const window4 = new Mesh(
	new PlaneGeometry(1, 1, windowWithSubdivision, windowHeightSubdivision),
	new MeshStandardMaterial({ color: windowColor })
);
window4.position.y = 1;
window4.position.x = -1.8;
window4.position.z = 2.01;

const window5 = new Mesh(
	new PlaneGeometry(0.3, 0.3, windowWithSubdivision, windowHeightSubdivision),
	new MeshStandardMaterial({ color: windowColor })
);
window5.position.y = 3.6;
window5.position.x = 0;
window5.position.z = 2.3;

const window6 = new Mesh(
	new PlaneGeometry(0.5, 0.5, windowWithSubdivision, windowHeightSubdivision),
	new MeshStandardMaterial({ color: windowColor })
);
window6.position.y = 2.8;
window6.position.x = 0;
window6.position.z = 2.3;

/**
 * Tower Roof
 */
const towerRoofRadio = 1;
const towerRoofHeight = 1;
const towerRoofRadialSegments = 16;
const roofColor = "#63462D";

const towerRoof = new Mesh(
	new ConeGeometry(towerRoofRadio, towerRoofHeight, towerRoofRadialSegments),
	new MeshStandardMaterial({ color: roofColor })
);
towerRoof.position.y = firstFloorHeight + secondFloorHeight + 0.5;
towerRoof.position.z = 1.5;

/**
 * Roof
 */
const roof1 = new Mesh(
	new PlaneGeometry(6, 2),
	new MeshStandardMaterial({color: roofColor})
);
roof1.rotation.x = -Math.PI * 0.3;
roof1.position.y = firstFloorHeight + 0.4;
roof1.position.z = 1.5;

const roof2 = new Mesh(
	new PlaneGeometry(6, 2),
	new MeshStandardMaterial({color: roofColor})
);
roof2.rotation.x = -Math.PI * 0.25;
roof2.position.y = firstFloorHeight + secondFloorHeight + 0.2;
roof2.position.z = 0.8;

// Door Light
doorLight.position.set(0, 1.8, 2.1);

// Add to the group
house.add(
	firstFloor,
	secondFloor,
	tower,
	towerRoof,
	roof1,
	roof2,
	door,
	doorLight,
	window1,
	window2,
	window3,
	window4,
	window5,
	window6,
	houseBushes,
	bushes
);

// Shadows
firstFloor.castShadow = true;
doorLight.castShadow = true;
doorLight.shadow.mapSize.width = 256;
doorLight.shadow.mapSize.height = 256;
doorLight.shadow.camera.far = 7;
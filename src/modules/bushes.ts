import { Mesh, SphereGeometry, MeshStandardMaterial, Group } from 'three'

const bushGeometry = new SphereGeometry(1,16,16);
const bushMaterial = new MeshStandardMaterial({ color: "#004d40" });

export const houseBushes = new Group();

export const bushes = new Group();

const bush1 = new Mesh(bushGeometry, bushMaterial);
bush1.scale.set(0.5,0.5,0.5);
bush1.position.set(0.8 * 2.7,0.2,2.2);

const bush2 = new Mesh(bushGeometry, bushMaterial);
bush2.scale.set(0.25,0.25,0.25);
bush2.position.set(1.4 * 2,0.1,2.1);

const bush3 = new Mesh(bushGeometry, bushMaterial);
bush3.scale.set(0.4,0.4,0.4);
bush3.position.set(-0.8 * 3,0.1,2.2);

const bush4 = new Mesh(bushGeometry, bushMaterial);
bush4.scale.set(0.15,0.15,0.15);
bush4.position.set(-1 * 2.8,0.05,2.6);

const bush5 = new Mesh(bushGeometry, bushMaterial);
bush5.scale.set(0.35,0.35,0.35);
bush5.position.set(-3,0.1,5.4);

const bush6 = new Mesh(bushGeometry, bushMaterial);
bush6.scale.set(0.15,0.15,0.15);
bush6.position.set(1.4,0.1,6.1);

const bush7 = new Mesh(bushGeometry, bushMaterial);
bush7.scale.set(0.2,0.2,0.2);
bush7.position.set(-2.5,0.1,5.8);

houseBushes.add(bush1, bush2, bush3, bush4);
bushes.add(bush5, bush6, bush7);

// Shadows
bush1.castShadow = true;
bush2.castShadow = true;
bush3.castShadow = true;
bush4.castShadow = true;


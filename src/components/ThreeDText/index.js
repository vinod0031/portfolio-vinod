import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import robotoFont from 'three/examples/fonts/helvetiker_regular.typeface.json'; // Example font

const ThreeDText = () => {
const mountRef = useRef(null);

useEffect(() => {
const width = mountRef.current.clientWidth;
const height = mountRef.current.clientHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
mountRef.current.appendChild(renderer.domElement);

// Add OrbitControls for better interaction
const controls = new OrbitControls(camera, renderer.domElement);

const fontLoader = new FontLoader();
fontLoader.load(robotoFont, (font) => {
    const textGeometry = new TextGeometry('Hello 3D!', {
    font: font,
    size: 1,
    height: 0.2,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 5
    });

    const textMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    scene.add(textMesh);

    textMesh.position.set(-3, 0, 0); // Positioning the text
});

camera.position.z = 5;

const animate = () => {
    requestAnimationFrame(animate);

    // Animation Logic Here
    scene.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();

return () => {
    mountRef.current.removeChild(renderer.domElement);
};
}, []);

return (
<div
    ref={mountRef}
    style={{ width: '100%', height: '500px' }}
/>
);
};

export default ThreeDText;

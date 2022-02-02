import * as THREE from 'three';

// Objects
import SphereInst from './sphereInst';

window.onload = () => {
    const fov = 75;
    const aspectRatio = window.innerWidth / window.innerHeight
    const clipping = {
        near: 0.1,
        far: 1000
    }

    // Initialize Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(fov, aspectRatio, clipping.near, clipping.far);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add Objects
    const sphereInst1 = new SphereInst();
    const sphereInst2 = new SphereInst();

    scene.add(sphereInst1.getMesh());
    scene.add(sphereInst2.getMesh());

    sphereInst1.getMesh().position.x = -2;
    sphereInst1.getMesh().position.y = -1;
    sphereInst2.getMesh().position.x = 2;
    sphereInst2.getMesh().position.y = 1;

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);

        sphereInst1.getMesh().rotation.x += 0.01;
        sphereInst1.getMesh().rotation.y += 0.01;

        renderer.render(scene, camera);
    };

    animate();
}
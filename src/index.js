import * as THREE from 'three';

// Objects
import SphereInst from './sphereInst';

const initializeLighting = (scene) => {
    const ambient = new THREE.AmbientLight(0x404040, 0.2);
    const direct = new THREE.DirectionalLight(0x404040, 0.4);
    const spot = new THREE.SpotLight(0xccccff)

    direct.position.x = 5;
    direct.position.y = 7;
    direct.position.z = -2.5;

    spot.position.x = -4;
    spot.position.y = -3;
    spot.position.z = 5;

    scene.add(ambient);
    scene.add(direct);
    scene.add(spot);
}

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

    // Lighting
    initializeLighting(scene);

    // Objects
    const sphereInst1 = new SphereInst({ size: 1.5, color: 0xffff00 });
    const sphereInst2 = new SphereInst({ color: 0x00ffff });
    const sphereInst3 = new SphereInst({ size: 0.75, color: 0xff00ff });

    sphereInst1.setPosition({ x: -2, y: -1 });
    sphereInst2.setPosition({ x: 2 });
    sphereInst3.setPosition({ y: 2, z: .95 });

    scene.add(sphereInst1.mesh);
    scene.add(sphereInst2.mesh);
    scene.add(sphereInst3.mesh);

    camera.position.z = 5;

    // Render
    renderer.render(scene, camera);
}
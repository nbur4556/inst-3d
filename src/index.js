import { Scene, WebGLRenderer, Raycaster, Vector2 } from 'three';
import * as initialize from './initialize';
import animate from './animate.js';

// Objects
import SphereInst from './sphereInst';

window.onload = () => {
    // Initialize Scene
    const scene = new Scene();
    const renderer = new WebGLRenderer();
    const camera = initialize.setCamera();
    const raycaster = new Raycaster();
    const pointer = new Vector2();

    initialize.setLighting(scene);

    // Objects
    const spheres = [
        new SphereInst({ size: 1.5, color: 0xffff00 }),
        new SphereInst({ color: 0x00ffff }),
        new SphereInst({ size: 0.75, color: 0xff00ff })
    ];

    spheres[0].setPosition({ x: -2, y: -1 });
    spheres[1].setPosition({ x: 2 });
    spheres[2].setPosition({ y: 2, z: .95 });

    spheres.forEach(sphere => {
        scene.add(sphere.mesh);
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xeeeeee, 1)
    document.body.appendChild(renderer.domElement);

    // Run per animation frame
    const renderFrame = () => {
        requestAnimationFrame(renderFrame);
        animate(spheres, scene);
        renderer.render(scene, camera);
    }
    renderFrame();

    // EVENTS

    window.addEventListener('pointermove', (e) => {
        // Normalize pointer coordinates
        pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    let activeSphere;

    window.addEventListener('mousedown', () => {
        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObjects(scene.children);

        if (intersects.length > 0) {
            // Create sphere effect on click sphere
            spheres.forEach(sphere => {
                if (sphere.mesh.uuid === intersects[0].object.uuid) {
                    const ringEffect = sphere.generateRingEffect();
                    scene.add(ringEffect.mesh);

                    activeSphere = sphere;
                    activeSphere.mesh.scale.x -= 0.05;
                    activeSphere.mesh.scale.y -= 0.05;
                    activeSphere.mesh.scale.z -= 0.05;
                }
            });
        }
    });

    window.addEventListener('mouseup', () => {
        if (activeSphere) {
            activeSphere.mesh.scale.x += 0.05;
            activeSphere.mesh.scale.y += 0.05;
            activeSphere.mesh.scale.z += 0.05;
            activeSphere = null;
        }
    });
}
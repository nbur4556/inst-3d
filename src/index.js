import { Scene, WebGLRenderer, Raycaster, Vector2 } from 'three';
import * as initialize from './initialize';

// Objects
import SphereInst from './sphereInst';

window.onload = () => {
    // Initialize Scene
    const scene = new Scene();
    const renderer = new WebGLRenderer();
    const camera = initialize.setCamera();

    initialize.setLighting(scene);

    const raycaster = new Raycaster();
    const pointer = new Vector2();

    // Set pointer coordinates on pointer move
    window.addEventListener('pointermove', (e) => {
        // Normalize pointer coordinates
        pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // Objects
    const spheres = [
        new SphereInst({ size: 1.5, color: 0xffff00 }),
        new SphereInst({ color: 0x00ffff }),
        new SphereInst({ size: 0.75, color: 0xff00ff })
    ];

    spheres[0].setPosition({ x: -2, y: -1 });
    spheres[1].setPosition({ x: 2 });
    spheres[2].setPosition({ y: 2, z: .95 });

    scene.add(spheres[0].generateRingEffect().mesh);

    spheres.forEach(sphere => {
        scene.add(sphere.mesh);
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let intersectID = null;

    // Run per animation frame
    const animate = () => {
        requestAnimationFrame(animate);

        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObjects(scene.children);

        // Mouse On
        if (intersects.length > 0) {
            intersectID = intersects[0].object.uuid;
            intersects[0].object.material.color.set(0xff0000);
        }
        // Mouse Off
        else if (intersectID !== null) {
            spheres.forEach(sphere => {
                if (sphere.mesh.uuid === intersectID) {
                    sphere.resetColor();
                }
            });

            intersectID = null;
        }

        renderer.render(scene, camera);
    }
    animate();
}
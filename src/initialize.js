import { AmbientLight, DirectionalLight, SpotLight } from 'three'

export const setLighting = (scene) => {
    const ambient = new AmbientLight(0x404040, 0.2);
    const direct = new DirectionalLight(0x404040, 0.4);
    const spot = new SpotLight(0xccccff)

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

import { PerspectiveCamera } from 'three';

export const setCamera = () => {
    const fov = 75;
    const aspectRatio = window.innerWidth / window.innerHeight
    const clipping = {
        near: 0.1,
        far: 1000
    }

    const camera = new PerspectiveCamera(fov, aspectRatio, clipping.near, clipping.far);
    camera.position.z = 5;

    return camera
}
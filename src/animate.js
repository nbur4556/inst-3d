const animateRingEffect = (sphere, scene) => {
    const effectSpeed = .3;
    const ringEffect = sphere.ringEffect;

    ringEffect.mesh.scale.x += effectSpeed;
    ringEffect.mesh.scale.y += effectSpeed;
    ringEffect.material.opacity -= 0.04;

    // Dispose on opacity 0
    if (ringEffect.material.opacity <= 0) {
        sphere.ringEffect = null;
        scene.remove(ringEffect.mesh);

        //! geometries and materials are not being disposed
        ringEffect.geometry.dispose();
        ringEffect.material.dispose();
    }
}

const animate = (spheres, scene) => {
    spheres.forEach(sphere => {
        if (sphere.ringEffect) {
            animateRingEffect(sphere, scene);
        }
    });
}

export default animate;
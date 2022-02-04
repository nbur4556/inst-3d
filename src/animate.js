const animateRingEffect = (sphere) => {
    const effectSpeed = .3;
    const ringEffect = sphere.ringEffect;

    ringEffect.mesh.scale.x += effectSpeed;
    ringEffect.mesh.scale.y += effectSpeed;
    ringEffect.material.opacity -= 0.04;

    // Dispose on opacity 0
    if (ringEffect.material.opacity <= 0) {
        sphere.ringEffect = null;
        ringEffect.mesh.geometry.dispose();
        ringEffect.mesh.material.dispose();
    }
}

const animate = (spheres) => {
    spheres.forEach(sphere => {

        if (sphere.ringEffect) {
            animateRingEffect(sphere);
        }

    });
}

export default animate;
const animateRingEffect = (ringEffect) => {
    ringEffect.mesh.scale.x += .1;
    ringEffect.mesh.scale.y += .1;
}

const animate = (spheres) => {
    spheres.forEach(sphere => {

        if (sphere.ringEffect) {
            animateRingEffect(sphere.ringEffect);
        }

    });
}

export default animate;
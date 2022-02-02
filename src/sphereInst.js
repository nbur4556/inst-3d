import { SphereGeometry, MeshBasicMaterial, Mesh } from "three";

function SphereInst() {
    const geometry = new SphereGeometry();
    const material = new MeshBasicMaterial({ color: 0xffff00 });
    this.cube = new Mesh(geometry, material);

    this.getMesh = () => {
        return this.cube;
    }
}

export default SphereInst;
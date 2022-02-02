import { SphereGeometry, MeshBasicMaterial, Mesh } from "three";

function SphereInst(args) {
    this.geometry = new SphereGeometry(args?.size);
    this.material = new MeshBasicMaterial({ color: args?.color });
    this.mesh = new Mesh(this.geometry, this.material);
}

export default SphereInst;
import { SphereGeometry, MeshBasicMaterial, Mesh } from "three";

function SphereInst(args) {
    this.geometry = new SphereGeometry(args?.size);
    this.material = new MeshBasicMaterial({ color: args?.color });
    this.mesh = new Mesh(this.geometry, this.material);

    this.setPosition = ({ x, y, z }) => {
        this.mesh.position.x = x | this.mesh.position.x;
        this.mesh.position.y = y | this.mesh.position.y;
        this.mesh.position.z = z | this.mesh.position.z;
    }
}

export default SphereInst;
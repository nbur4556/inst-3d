import { SphereGeometry, MeshLambertMaterial, Mesh } from "three";

function SphereInst(args) {
    this.color = args?.color;
    this.geometry = new SphereGeometry(args?.size);
    this.material = new MeshLambertMaterial({ color: this.color });
    this.mesh = new Mesh(this.geometry, this.material);

    this.setPosition = ({ x, y, z }) => {
        this.mesh.position.x = x | this.mesh.position.x;
        this.mesh.position.y = y | this.mesh.position.y;
        this.mesh.position.z = z | this.mesh.position.z;
    }

    this.resetColor = () => {
        this.material.color.set(this.color);
    }
}

export default SphereInst;
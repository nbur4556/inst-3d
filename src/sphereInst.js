import { SphereGeometry, TorusGeometry, MeshLambertMaterial, Mesh } from "three";

function RingEffect(args) {
    this.geometry = new TorusGeometry(0.1, 0.05, 5, 100);
    this.material = new MeshLambertMaterial({ color: args?.color });
    this.mesh = new Mesh(this.geometry, this.material);
}

function SphereInst(args) {
    this.color = args?.color;
    this.geometry = new SphereGeometry(args?.size);
    this.material = new MeshLambertMaterial({ color: this.color });
    this.mesh = new Mesh(this.geometry, this.material);

    this.generateRingEffect = () => {
        const ringEffect = new RingEffect({ color: this.color });

        ringEffect.mesh.position.x = 0;
        ringEffect.mesh.position.y = 0;
        ringEffect.mesh.position.z = 0;

        return ringEffect;
    }

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
import { SphereGeometry, TorusGeometry, MeshLambertMaterial, Mesh } from "three";

function RingEffect(args) {
    this.geometry = new TorusGeometry(0.5, 0.05, 10, 100);
    this.material = new MeshLambertMaterial({ color: args?.color, transparent: true, opacity: 1 });
    this.mesh = new Mesh(this.geometry, this.material);
}

function SphereInst(args) {
    this.color = args?.color;
    this.geometry = new SphereGeometry(args?.size);
    this.material = new MeshLambertMaterial({ color: this.color });
    this.mesh = new Mesh(this.geometry, this.material);
    this.ringEffect = null;

    this.generateRingEffect = () => {
        this.ringEffect = new RingEffect({ color: this.color });

        // Set position
        this.ringEffect.mesh.position.x = this.mesh.position.x;
        this.ringEffect.mesh.position.y = this.mesh.position.y;
        this.ringEffect.mesh.position.z = this.mesh.position.z;

        return this.ringEffect;
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
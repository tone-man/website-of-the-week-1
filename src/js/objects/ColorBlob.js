import { Group, SphereGeometry, MeshStandardMaterial, Mesh, Color, MeshPhongMaterial } from "three";

export default class ColorBlob extends Group {
  constructor( color ) {
    super();

    //sphere object
    const geometry = new SphereGeometry(0.5, 16, 16);

    const texture = new MeshPhongMaterial();
    texture.color = color;
    
    const mesh = new Mesh(geometry, texture);

    this.add(mesh);
  }
}

import { Color, Group, Mesh, MeshStandardMaterial, SphereGeometry } from "three";
import BasicLights from "./Lights.js";
import ColorBlob from "./ColorBlob.js";
import ColorSpinner from "./ColorSpinner.js";

const colors = [new Color(0xe12729), new Color(0xf37324), new Color(0xf8cc1b),
                new Color(0x72b043), new Color(0x1982c4), new Color(0x6a4c93)]

export default class SeedScene extends Group {
  constructor(...args) {
    super(...args);
    
    const lights = new BasicLights();

    const blobs = []
    
    colors.forEach((color) => {
        blobs.push(new ColorBlob(color));
    });

    const spinner = new ColorSpinner(blobs);

    this.add(spinner, lights);
    console.log(this);
  }

  update(timeStamp) {
    this.rotation.z = timeStamp / 1250;
  }
}

import { Group, Vector3 } from "three";

export default class ColorSpinner extends Group {
  constructor(array) {
    super();

    const increment = (2 * Math.PI) / array.length;
    const spacing = 3;

    array.forEach( (colorblob, index) => {
        let offsetX = Math.cos(increment * index) * spacing;
        let offsetY = Math.sin(increment * index) * spacing;
        
        colorblob.translateX(offsetX);
        colorblob.translateY(offsetY);

        this.add(colorblob);
    });
  }
}

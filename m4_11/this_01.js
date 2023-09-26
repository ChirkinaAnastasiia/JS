'use strict';

const rectangle = {
  width: 5,
  height: 5,
  set rectangleWidth(val) {
    if (typeof val === 'number') {
      this.width = val;
    } else {
      console.error(`'${val}' is not a number`);
    }
  },
  set rectangleHeight(val) {
    if (typeof val === 'number') {
      this.height = val;
    } else {
      console.error(`'${val}' is not a number`);
    }
  },
  get rectanglePerimeter() {
    return `${(this.width + this.height) * 2} см`;
  },
  get rectangleArea() {
    return `${this.width * this.height} см`;
  },
};

rectangle.rectangleWidth = 'abc';
rectangle.rectangleWidth = 10;
rectangle.rectangleHeight = 10;

console.log(`Периметр: ${rectangle.rectanglePerimeter}`);
console.log(`Площадь: ${rectangle.rectangleArea}`);


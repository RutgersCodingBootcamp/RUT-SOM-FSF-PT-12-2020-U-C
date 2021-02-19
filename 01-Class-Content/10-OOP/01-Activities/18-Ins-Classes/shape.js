class Shape {
  // Just like constructor functions, classes can accept arguments
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  printInfo() {
    console.log(`Area: ${this.area}`);
    console.log(`Perimeter: ${this.perimeter}`);
  }

  squareRootArea(){
    console.log(`Sqrt Area: ${Math.sqrt(this.area)}`);
  }
}

const shape = new Shape(25, 25);

shape.printInfo();
shape.squareRootArea();
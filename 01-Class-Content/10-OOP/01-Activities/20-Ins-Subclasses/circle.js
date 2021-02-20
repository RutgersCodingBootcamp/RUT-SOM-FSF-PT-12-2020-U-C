const Shape = require("./shape");

class Circle extends Shape {
    constructor(radius){
        const area = Math.PI * (radius ^ 2);
        const perimeter = 2 * Math.PI * radius;

        super(area,perimeter);
        this.radius = radius;

    }
}

let myCirle = new Circle(6);
myCirle.printInfo();
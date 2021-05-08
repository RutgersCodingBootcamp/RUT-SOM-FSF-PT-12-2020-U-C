const Vehicle = require("./vehicle");

// * Create a `Car` class that extends the `Vehicle` class. The car should have the following features:
class Car extends Vehicle {
  constructor(id, color, passengers) {
    // Car paramenter
    super(id, 4, "beep"); // Vehichle parameters
    this.color = color;
    this.passengers = passengers;
  }

  checkPassengerLength() {
    if (this.passengers.length > 4) {
      console.log("Cars only seat 4 peple.  You have too many passengers!");
    } else {
      console.log(`You have room for ${4 - this.passengers.length} people`);
    }
  }

  useHorn() {
    console.log(this.sound);
  }
  //   * A `useHorn` method that prints the car's sound to the console.
}

const carPassengers = [
    { name: "Kiera"},
    { name: "Mena"},
    { name: "Esteban"},
    { name: "Mollie"},
    { name: "Jacob"}
];

const car = new Car(15, "blue", carPassengers);

console.log("=== Car ===");
car.printInfo();
car.useHorn();
car.checkPassengerLength();
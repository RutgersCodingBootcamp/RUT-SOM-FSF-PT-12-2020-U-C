const Vehicle = require("./vehicle");
// * Create a `Boat` class that also extends the `Vehicle` class. The boat should have the following features:

class Boat extends Vehicle {
  constructor(id, type, crew) {
    super(id, 0, "bwom");
    this.type = type;
    this.crew = crew;
  }

  crewSoundOff() {
    this.crew.forEach((member) => {
      console.log(`${member.name} reporting for duty!`);
    });
  }

  useHorn() {
    console.log(this.sound);
  }
}

const boatPassengers = [
  { name: "Esteban" },
  { name: "Mollie" },
  { name: "Jacob" },
];

const boat = new Boat(16, "sailboat", boatPassengers);
console.log("=== BOAT ===");
boat.printInfo();
boat.useHorn();
boat.crewSoundOff();

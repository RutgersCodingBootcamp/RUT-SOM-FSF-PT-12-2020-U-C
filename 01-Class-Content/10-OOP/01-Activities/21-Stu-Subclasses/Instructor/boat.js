const Vehicle = require("./vehicle");

class Boat extends Vehicle{
    constructor(id, sound, crew){
        const numberOfWheels = 0;
        super(id, numberOfWheels, sound);
        this.crew = crew;
    }
    useHorn(){
        console.log(this.sound);
    }
    crewSoundOff(){
        console.log("The crew: ")
        this.crew.forEach(person => {
            console.log(person);
        });
    }
}

// * Create a `Boat` class that also extends the `Vehicle` class. The boat should have the following features:
//   * A crew property
//   * A `crewSoundOff()` method that prints each member of the crew to the console.
//   * A `useHorn` method that prints the boat's sound to the console.

let myYacht = new Boat(2, "loud honk", ["Anthony", "Bob", "Cherise"]);
myYacht.crewSoundOff();
myYacht.useHorn();
myYacht.printInfo();
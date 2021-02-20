const Vehicle = require("./vehicle");

class Car extends Vehicle{
    constructor(id, sound, color, passengers){
        const numberOfWheels = 4;

        super(id, numberOfWheels, sound);
        this.color = color;
        this.passengers = passengers;
    }

    //     * A `checkPassengers()` method that checks to see if there are 4 or less passengers. If not, `console.log` that there are too many passengers.
    //   * A `useHorn` method that prints the car's sound to the console.
    checkPassengers(){
        if(this.passengers > 4){
            console.log("There are too many passengers");
        }
    }
    useHorn(){
        console.log(this.sound);
    }

}

let corolla = new Car(1, "honk", "blue", 4);
corolla.printInfo();
corolla.useHorn();
corolla.checkPassengers();

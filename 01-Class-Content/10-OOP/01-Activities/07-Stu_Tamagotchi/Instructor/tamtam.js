// console.log("Test");
// * Create a constructor called "DigitalPal" which will create six properties and 10 methods...
function DigitalPal(){
    //   * The first property is "hungry" and it initially starts out as false
    this.hungry = false;
    //   * The second property is "sleepy" and it initially starts out as false
    this.sleepy = false;
    //   * The third property is "bored" and it initially starts out as true
    this.bored = true;
    //   * The fourth property is "age" and it initially starts out at 0
    this.age = 0;
    // 	* the fifth property is "outside" and is initially set to false
    this.outside = false;
    // 	* the sixth property is "houseCondition" and is initially set to 100... But not for long...
    this.houseCondition = 100;
}
// 	- - - 

// 	* The first method is "feed()" - If hungry is true, print "That was yummy!", set hungry to false, and then set sleepy to true. If hungry is false, print "No thanks! I'm full."
DigitalPal.prototype.feed = function(){
    if(this.hungry){
        console.log("That was yummy!");
        this.hungry = false;
        this.sleepy = true;
    }
    else{
        console.log("No thanks! I'm full");
    }
}

// 	* The second method is "sleep()" - If sleepy is true, print `Zzzzzzzz`, set sleepy to false, then set bored to true, and then run increaseAge(). If sleepy is false, print "No way! I'm not tired."

// 	* The third method is "play()" - If bored is true, print "Yay! Let's play!", set bored to false, and then set hungry to true. If bored is false, print "Not right now. Later?"

// 	* The fourth method is "increaseAge()" - This method is called by the sleep() method when the DigitalPal goes to sleep and increases the DigitalPal's age by one while also printing "Happy Birthday to me! I am "+age+" old!"

// 	* The fifth method is "bark()" - Prints out "Woof! Woof!" when run
DigitalPal.prototype.bark = function(){
    console.log("Woof woof!");
}

// 	* the sixth method is "goOutside()" - If outside is false, prints "Yay! I love the outdoors!", sets outside to true, and runs bark(). If outside is true, prints "We're already outside though..."

// 	* the seventh method is "goInside()" - If outside is true, prints "Do we have to? Fine..." and sets outside to false. If outside is false, prints "I'm already inside..."
	
//   * the eighth method is "meow()" - prints out "Meow! Meow!" when run

//   * the ninth method is "destroyFurniture()" - Decreases houseCondition by 10 and prints "MUAHAHAHAHA! TAKE THAT FURNITURE!" to the screen. Also sets bored to false and sleepy to true. If houseCondition is equal to 0, then this should not run anymore.
DigitalPal.prototype.destroyFurniture = function(){
    if(this.houseCondition !== 0){
        this.houseCondition -= 10;
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
        this.bored = false;
        this.sleepy = true;
    }
}

//   * the tenth method is "buyNewFurniture()" - Increases houseCondition by 50 and prints "Are you sure about that?" to the screen.
DigitalPal.prototype.buyNewFurniture = function(){
    this.houseCondition += 50;
    console.log("Are you sure about that?");
}

// * Create a variable named "dog" that is set to a new DigitalPal

// * Make a second variable named "cat" that is set to a new DigitalPal

// * Play around with your newly created digital pets for a bit and see what else you could add in order to make them even more exciting!

// * BONUS: Make it so your Tamagotchis run off of user-input from the command line. It may sound easy at first, but this can actually be quite challenging. We will be going over this in more detail during the next class.


var bob = new DigitalPal();
console.log(bob);
bob.feed();
bob.feed();
bob.bark();
bob.destroyFurniture();
bob.destroyFurniture();
bob.destroyFurniture();
bob.destroyFurniture();
bob.destroyFurniture();
bob.destroyFurniture();
bob.destroyFurniture();
bob.destroyFurniture();
bob.destroyFurniture();
bob.destroyFurniture();
bob.destroyFurniture();
bob.destroyFurniture();
bob.destroyFurniture();
bob.buyNewFurniture();
console.log(bob);
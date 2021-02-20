class Character {
  // * Name
  // * Strength
  // * HitPoints
  constructor(name, strength, hitpoints){
    this.name = name;
    this.strength = strength;
    this.hitpoints = hitpoints;
  }

  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following: `);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitpoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {}

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    // Then, change the opponent's hitPoints to reflect this
    // damage = the other guys hitpoints
    console.log(`${opponent.name} was attacked with ${this.strength} damage.`)
    opponent.hitpoints = opponent.hitpoints - this.strength;
  }
}

// Create two unique characters using the "character" class
let ironman = new Character("Ironman", 10000, 1000000);
let captainMarvel = new Character("Captain Marvel", 30000, 100000);
// Create an interval that alternates attacks every 2000 milliseconds
ironman.printStats();
captainMarvel.printStats();
captainMarvel.attack(ironman);
ironman.printStats();

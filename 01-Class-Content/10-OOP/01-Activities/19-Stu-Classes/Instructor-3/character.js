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
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitpoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    if(this.hitpoints > 0){
      return true;
    }
    return false;
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    // Then, change the opponent's hitPoints to reflect this
    // damage = this.strength
    // opponent.hitpoints = opponent.hitpoints - this.strength;
    opponent.hitpoints -= this.strength;
    console.log(`${this.name} attacked ${opponent.name} and dealt ${this.strength} damage.`);

  }
}

let ironman = new Character("Ironman", 10000, 1000000);
let captainMarvel = new Character("Captain Marvel", 300000, 100000);
// Create an interval that alternates attacks every 2000 milliseconds
ironman.printStats();
captainMarvel.printStats();

var attackInterval = setInterval(() => {
  captainMarvel.attack(ironman);
  ironman.printStats();
  if(!ironman.isAlive()){
    clearInterval(attackInterval);
    console.log("He's dead, Jim");
  }
}, 2000);

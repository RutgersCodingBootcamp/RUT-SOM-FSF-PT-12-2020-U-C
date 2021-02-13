// console.log("Test nodemon");
// * Each character created using your constructor should have the following properties...
function Character(name, profession, age, strength, hitpoints){
    //   * Name: The character's name --> String
    this.name = name;
    //   * Profession: What the character does for a living --> String
    this.profession = profession;
    //   * Age: The character's age --> Number
    this.age = age;
    //   * Strength: Abstraction for how strong the character is --> Number
    this.strength = strength;
    //   * HitPoints (HP): Abstraction for how much health the character has --> Number
    this.hitpoints = hitpoints;
    //   * PrintStats: Function which prints all of a character's properties to the screen
    this.printStats = () => {
        console.log(this);
    }
    //   * Once you have created your constructor, create two new characters and print their properties to the screen
}
// * Now add 3 methods onto it via the prototype.

//   * IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and determining whether they are above or below zero.
Character.prototype.isAlive = function() {
    // console.log(this);
    // if(this.hitpoints > 0){
    //     console.log("(S)He's alive");
    // }
    // else{
    //     console.log("(S)He's dead, Jim");
    // }
    this.hitpoints > 0 ? console.log("(S)He's alive") : console.log("(S)He's dead, Jim");
}
//   * Attack: Function which takes in a second character and subtracts this character's strength from their hitpoints.
Character.prototype.attack = function(otherCharacter){
    this.hitpoints = this.hitpoints - otherCharacter.strength;
}

//   * LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.
Character.prototype.attack = function(){
    this.age++;
    this.strength += 5;
    this.hitpoints += 25;
}
let mangoMan = new Character("Mango Man", "Pro Wrestler", 45, 100, 1);
mangoMan.printStats();
mangoMan.hitpoints = -1;
mangoMan.isAlive();

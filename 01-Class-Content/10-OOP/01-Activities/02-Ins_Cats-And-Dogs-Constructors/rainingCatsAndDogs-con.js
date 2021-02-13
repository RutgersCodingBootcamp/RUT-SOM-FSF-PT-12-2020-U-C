// Constructor function which can be used to create objects containing the properties "raining", "noise", and the "makeNoise()" function
// generally, if you know the objects have different starting values, you add them to the constructor as input parameters
function PetAnimal(raining, noise) {
  this.raining = raining;
  this.noise = noise;
  // fat arrows maintain the context of the wrapping functional block
  // "this" stays the same value
  this.makeNoise = () => {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}

// Sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
const dogs = new PetAnimal(true, "Woof!");
const cats = new PetAnimal(false, "Meow!");
const ivanCat = new PetAnimal(true, "Bloop! Bloop!");

// Calling dogs and cats makeNoise methods
dogs.makeNoise(); // Woof
cats.makeNoise(); //

// If we want, we can change an objects properties after they're created
cats.raining = true;
cats.makeNoise(); // Meow

const massHysteria = (dogs, cats, roboCat) => {
  if (dogs.raining === true && cats.raining === true && roboCat.raining === true) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA! Bloop Bloop!"); // "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!"
  }
};

massHysteria(dogs, cats, ivanCat);

ivanCat.makeNoise(); // Bloop! Bloop!
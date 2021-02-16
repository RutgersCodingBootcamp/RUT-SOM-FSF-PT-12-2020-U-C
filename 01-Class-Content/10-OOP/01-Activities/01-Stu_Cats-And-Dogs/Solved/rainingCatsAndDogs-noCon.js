// Creates an object and sets it to "dogs"
const dogs = {
  // creates the property "raining" and sets it to true
  raining: true,
  // Creates the property "noise" and sets it to "Woof!"
  noise: "Woof!",
  // Creates the method "makeNoise", which when called, prints dogs.noise if .raining is true
  makeNoise() {
    // The 'this' keyword refers to the object it's called from
    // i.e. this.raining refers to the raining property of 'this' particular object
    if (this.raining === true) {
      console.log(this.noise);
    }
  }
};

// Creates an object and sets it to "cats"
const cats = {
  raining: false,
  noise: "Meow!",
  makeNoise() {
    if (this.raining === true) {
      console.log(this.noise);
    }
  }
};

// Calls the "makeNoise" methods for both objects
dogs.makeNoise();
cats.raining = true;
cats.makeNoise();

// Creates a function called "massHysteria" which takes in both objects and
// Prints a message to the screen if ".raining" is true for both of them
const massHysteria = (dogs, cats) => {
  if (dogs.raining === true && cats.raining === true) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  }
};

massHysteria(dogs, cats);

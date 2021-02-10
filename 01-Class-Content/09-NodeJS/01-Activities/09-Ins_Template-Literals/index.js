const arya = {
  first: "Arya",
  last: "Stark",
  origin: "Winterfell",
  allegiance: "House Stark"
};

const weirdFunction = () => 1;

const greeting = `My name is ${arya.first}!
I am loyal to ${arya.allegiance}. ${weirdFunction()} + ${weirdFunction()}`;

console.log(greeting); // prints
// My name is Arya!
// I am loyal to House Stark.
const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: 14 },
  { name: "Malcolm", age: 15 }
];

// 1.

// forEach is a functional way of iterating through an array without a for-loop
//functional
moviePatrons.forEach(PeterPiper => console.log(PeterPiper.name));
//procedural
for(var i = 0; i < moviePatrons.length; i++){
  var PeterPiper = moviePatrons[i];
  console.log(PeterPiper.name);
}
// for each patron, i want to console.log patron.age

// 2.

// Filter returns a new array containing only elements whose callback returns a truthy value
//functional
const canWatchRatedR = moviePatrons.filter(function(patron) {
  return patron.age > 17;
});
//procedural
var patronsThatCanWatchRatedR = [];
for(var i = 0; i < moviePatrons.length; i++){
  var patron = moviePatrons[i];
  if(patron.age > 17){
    patronsThatCanWatchRatedR.push(patron);
  }
}

const canWatchRatedR2 = moviePatrons.filter(patron => patron.age > 17);
// i want to filter for patrons greater than 17 years

console.log(canWatchRatedR2);

// 3.

// Map returns a brand new array the same length as the first. Each element is passed into the callback.
// Whatever is returned from the callback at each iteration is what goes into that index of the new array

const cardedMoviePatrons = moviePatrons.map(patron => {
  // Copy the object being iterated over
  const pObj = { ...patron }; // duplicates the object 
  // Do everything else the same
  if (pObj.age >= 17) {
    pObj.canWatchRatedR = true;
  } else {
    pObj.canWatchRatedR = false;
  }
  // Be sure to return the new obj, not the parameter
  return pObj; // <-- important line -> don't forget it!!!
});

var cardedMoviePatrons2 = [];
for(var i = 0; i < moviePatrons.length; i++){
  var patron = moviePatrons[i];
  var copiedObj = { ...patron};
  if (copiedObj.age >= 17) {
    copiedObj.canWatchRatedR = true;
  } else {
    copiedObj.canWatchRatedR = false;
  }

  cardedMoviePatrons2.push(copiedObj);
}

// "empire state" --> <h1>Empire State</h1>
console.log("Movie Patrons: ")
console.log(moviePatrons);

console.log("\nCarded Movie Patrons: ");
console.log(cardedMoviePatrons);
console.log(cardedMoviePatrons2);

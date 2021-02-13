// // 1.
// myArray = [2, 4, 6, 8];
// console.log(myArray);

// myArray.forEach((num) => console.log(num));

// myArray.map((x) => console.log(x * 2));
// //

// // 2.
// myObject = {
//     name: "Eric",
//     age: 28,
//     occupation: "Curriculum Dev"
// };

// console.log(myObject);

// console.log("Hello");
// console.log("Hello".toLowerCase());

// console.log(1337);
// console.log((1337).toString());
// //

// 3.
function Movie(title, releaseYear) { // this is a constructor <- uppercase first letter lets us know
    this.title = title;
    this.releaseYear = releaseYear;
}

// You must use 'function' when assigning to prototype. 
// Otherwise, 'this' will be the global object,
// window in the browser, undefined in node.
Movie.prototype.logInfo = function() {
    // what is "this"???? <- we are adding a function called logInfo as the default function for that object
    console.log(`${this.title} was released in ${this.releaseYear}`);
};

Movie.prototype.nameOfDirector = function(){
    console.log(`Director: Ernesto for ${this.title}`);
}

const theShining = new Movie("The Shining", 1980)
theShining.logInfo();
theShining.nameOfDirector();

// console.log(theShining.hasOwnProperty('title'));
// console.log(theShining.hasOwnProperty('logInfo'));
// console.log(Movie.prototype.hasOwnProperty('logInfo'));
//
// ## Acceptance Criteria

// * It's done when I use `process.argv` to assign two arguments to variables.
const num1 = process.argv[2];
const num2 = process.argv[3];

console.log(num1);
console.log(num2);
// * It's done when I compare those two variables to see whether they are the same or not.
// condition ? truevalue : falsevalue;
console.log(num1 === num2 ? "success" : "failure");

// if (num1 === num2) {
//     console.log(true);
// } else {
//     console.log(false);
// }


// How many different ways can you solve this problem? Remember that there is not just one correct solution.



// * What is the difference between `===` and `==` when comparing two values in JavaScript?
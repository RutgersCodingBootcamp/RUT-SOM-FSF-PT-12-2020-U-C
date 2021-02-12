// without rest
// function add(x, y) {
//   return x + y;
// }
// console.log(add(1,2)) // => 3
// console.log(add(1, 2, 3, 4, 5)); // => 3

// 1. rest
// function add(...nums) {
//   console.log(nums);
//   let sum = 0;
//   for (let num of nums) sum += num;
//   return sum;
// }
// console.log(add());
// console.log(add(1)); // => 1
// console.log(add(3, 3)); // => 6
// console.log(add(1, 1, 4, 5)); // => 11


// function dummyFunc(x1, x2, x3, ...nums) {
//   console.log(nums);
//   return 0;
// }
// console.log(dummyFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// // 2. 
// function howManyArgs(...args) {
//   return `You passed ${args.length} arguments.`; // point out the template literal
// }

// console.log(howManyArgs(0, 1)); // You have passed 2 arguments.
// console.log(howManyArgs("argument!", null, ["one", 2, "three"], 4)); // You have passed 4 arguments.

// 1. spread
const petersWeapons = ["Frying pan", "AR15", "Wit", "Guitar"];
const dragons = ["Drogon", "Viserion", "Rhaegal", ...petersWeapons];
const weapons = ["dragonglass", ...dragons, "wildfire"]; // notice the spread operator ...dragons

console.log(weapons); // prints ["dragonglass", "Drogon", "Viserion", "Rhaegal", "wildfire"]

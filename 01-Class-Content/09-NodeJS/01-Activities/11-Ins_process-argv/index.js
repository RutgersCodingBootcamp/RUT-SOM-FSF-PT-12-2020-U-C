// returns an array of command line arguments
// console.log(process);
// console.log(process.argv);

// arguments passed from the command line are accessed by index
console.log(process.argv[2]);
console.log(process.argv[3]);
console.log(process.argv[4]);

let str ="node index Peter Wan Konobi";
let strV = str.split(" ");

console.log(strV[2]);
console.log(strV[3]);
console.log(strV[4]);

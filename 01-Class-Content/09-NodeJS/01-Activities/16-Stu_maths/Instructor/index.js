// console.log(process.argv);
// TODO: Import `maths.js`
const maths = require('./maths.js');
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
// console.log(maths);

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
// console.log(process.argv[2]);
// console.log(process.argv[3]);
// console.log(process.argv[4]);

let operation = process.argv[2];
let num1 = parseInt(process.argv[3]);
let num2 = parseInt(process.argv[4]);
// if(operation === "sum"){
//     console.log(maths.sum(num1,num2));
// }
switch (operation) {
    case "sum":
        console.log(maths.sum(num1, num2));
        break;
    case "product":
        console.log(maths.product(num1, num2));
        break;
    case "quotient":
        console.log(maths.quotient(num1, num2));
        break;
    case "difference":
        console.log(maths.difference(num1, num2));
        break;
    default:
        console.log("Stop being so unpredictable, Peter");
}
var sum = function(numOne, numTwo) {
  return numOne + numTwo;
};

var multiply = function(numOne, numTwo) {
  return numOne * numTwo;
};

var divide = function(numOne, numTwo){
  return numOne / numTwo;
}

var addCallBacks = function(functionOne, functionTwo) {
  return functionOne(6, 2) + functionTwo(6, 3);
};

// What does this return?
// multiply is a function
// sum is a function
// callbacks are functions that are used as inputs
console.log(addCallBacks(multiply, sum));
console.log(addCallBacks(divide, sum));

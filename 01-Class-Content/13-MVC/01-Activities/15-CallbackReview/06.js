var sum = function(numOne, numTwo) {
  return numOne + numTwo;
};

var subtract = function(numOne, numTwo) {
  return numOne - numTwo;
};

var multiply = function(numOne, numTwo) {
  return numOne * numTwo;
};

var anythingGoes = function(functionOne, functionTwo, functionThree) {
  functionThree(functionOne(3, 4), functionTwo(7, 2));

  // return undefined
};

// Challenge: what does this return?
console.log(anythingGoes(multiply, subtract, sum));

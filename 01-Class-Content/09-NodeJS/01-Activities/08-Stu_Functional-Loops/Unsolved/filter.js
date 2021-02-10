const originalArray = [1, 3, 2, 5, 10];

// evenNumbers is equal to a new array of even numbers returned by filter(). filter() will use an anonymous function as a condition. 
// const evenNumbers = originalArray.filter(function(data) {
//   // The anonymous function uses a conditional to check if a number is divisible by 2. 
//   // if (data % 2 === 0) { // if there is no remainder when you divide by 2
//   //   // If a number is even (divisible by 2), the condition returns true.
//   //   return true;
//   // }

//   // conditional ? trueValue : falseValue;
//   return data % 2 === 0 ? true : false;
// });

// const evenNumbers = originalArray.filter(function(data) {
//   // The anonymous function uses a conditional to check if a number is divisible by 2. 
//   // if (data % 2 === 0) { // if there is no remainder when you divide by 2
//   //   // If a number is even (divisible by 2), the condition returns true.
//   //   return true;
//   // }

//   // conditional ? trueValue : falseValue;
//   return data % 2 === 0;
// });

const evenNumbers = originalArray.filter( data => data % 2 === 0);

console.log(evenNumbers);
console.log(originalArray);

const isPrime = num => {
  // Set up a loop the starts with 2 and continues to increment i as long as i is less than 2
  for (let i = 2; i < num; i++) {
    // isPrime will return false if num is divisible by any number other than 1 or num.
    if (num % i === 0) return false;
  }
  // Otherwise, isPrime will return num, unless num == 1.
  return num !== 1; // for any whole number except for 1, it will return the number if it prime
};


// num = 9
// i = 2
// 9 % 2 = 1
// i = 3
// 9 % 3 = 0

// num = 7
// i = 2
// 7 % 2 = 1
// i = 3
// 7 % 3 = 1
// i = 4
// 7 % 4 = 3
// 7 !== 1
// return true;


// // TODO: Describe how filter is working in this example. What will the value of primeArray be? 
// const primeArray = originalArray.filter(isPrime);


// // TODO: Describe how filter is working in this example. What will the value of moreThan5Array be? 
// const moreThan5Array = originalArray.filter(num => num > 5);


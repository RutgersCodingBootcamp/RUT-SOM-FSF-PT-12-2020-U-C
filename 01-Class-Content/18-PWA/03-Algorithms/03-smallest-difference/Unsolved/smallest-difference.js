// Write a function that takes in two sorted arrays and returns a pair of numbers (one from each array) with the smallest difference

var smallestDifference = function (arr1, arr2) {
  let smallestDiff;
  let firstPass = true;

  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      //first pass: 1-8 =7
      if (firstPass) {
        firstPass = false;
        smallestDiff = Math.abs(arr1[i] - arr2[j]); //first pass: 1-8 =7
        num1 = arr1[i]; // 1
        num2 = arr2[j]; // 8
      } else {
        currDiff = Math.abs(arr1[i] - arr2[j]); // secondpass: 1-9 = 8
        if (currDiff < smallestDiff) {
          smallestDiff = currDiff;
          num1 = arr1[i];
          num2 = arr2[j];
        }
      }
    }
  }
  return [num1, num2, smallestDiff];
};

// Inputs
// var a1 = [1, 6, 7, 9];
// var a2 = [8, 9, 10, 11, 12, 13];

var a1 = [2, 4, 6, 8, 15, 20];
var a2 = [50, 25, 30, 47];

// output
// [9, 9]; smallest difference between 9-9=0
var results = smallestDifference(a1, a2);
console.log(results);

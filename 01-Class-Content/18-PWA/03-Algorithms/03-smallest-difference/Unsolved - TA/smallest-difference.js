// Write a function that takes in two sorted arrays and returns a pair of numbers (one from each array) with the smallest difference

var smallestDifference = function(arr1, arr2) {

    let smallestDiff;
    let firstPass = true;
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j <arr2.length; j++) {
            if (firstPass) {
                smallestDiff = Math.abs(arr1[i] - arr2[j]);
                num1 = arr1[i];
                num2 = arr2[j];
                firstPass = false;
            } else {
                currDiff = Math.abs(arr1[i] - arr2[j]);
                if (currDiff <= smallestDiff) {
                    smallestDiff = currDiff;
                    num1 = arr1[i];
                    num2 = arr2[j];
                }
            }
        }
    }
    return [num1, num2, smallestDiff];
};

// INPUT
var arr1 = [1, 6, 7, 9];
var arr2 = [8, 9, 10, 11, 12, 13];

// var arr1 = [2, 4, 6, 8, 15, 20];
// var arr2 = [17, 25, 30, 47];

// var arr1 = [100, 48, 50, 8, 150, 20];
// var arr2 = [5, 80, 1, 17, 15];


// 1-8 = 7
// 1-9 = 8
// 1-10 = 9
// 1-11 = 10
// 1-12 = 11
// 1-13 = 12

// OUTPUT
var result = smallestDifference(arr1, arr2);
console.log(result);
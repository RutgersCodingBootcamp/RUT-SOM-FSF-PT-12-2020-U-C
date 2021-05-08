// Write a function that takes a positive integer and returns true if the integer is an armstrong number, else return false. To find out if a number is an armstrong number, take each individual digit and raise it to the power of the length of the entire number and add the digits. If the sum equals the original number, the number is an armstrong number

var isArmstrong = function(num) {
    let str = num.toString();
    let sum = 0;

    for (var i = 0; i < str.length; i++) {
        let digit = parseInt(str[i]); // 1
        sum += digit ** str.length;  // 1^3
    }
    return sum === num;
    // 1^3
    // 5^3
    // 3^3
    // = 153
};


var origNum = 5787;
var result = isArmstrong(origNum);
console.log(result);

// * Since `(1^3) + (5^3) + (3^3) === 153`
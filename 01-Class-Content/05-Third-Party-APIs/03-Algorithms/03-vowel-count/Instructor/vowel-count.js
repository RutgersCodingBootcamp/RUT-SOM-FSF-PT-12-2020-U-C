// Write code to return the the number of vowels in `str`
// created the function with input str, a string
var vowelCount = function(str) {
    // check to make sure string is defined, not null and has a length greater than 0
    if(typeof str !== 'undefined' && str !== null && str.length > 0){
        // start count at 0
        var vowelCount = 0;
        // need a string with all vowels
        var vowels = "aeiou";
        // using our for loop to go through each letter in str
        for(var i = 0; i < str.length; i++){
            // console.log(str[i]);
            // finds the lowercase character in the vowel string
            if(vowels.indexOf(str[i].toLowerCase()) >= 0){
                // if it is found, increment the count
                vowelCount++;
            }
        }
        // give the count back
        return vowelCount;
    }
    // if the input is invalid, just give 0
    return 0;
};
var vowelCount = function(str) {
    // check to make sure string is defined, not null and has a length greater than 0
    if(typeof str !== 'undefined' && str !== null && str.length > 0){
        // using higher order functions
        return str.split("").filter( ch => "aeiou".indexOf(ch.toLowerCase()) >= 0).length;
    }
    // if the input is invalid, just give 0
    return 0;
};


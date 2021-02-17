function Algo() {}

Algo.prototype.reverse = function(str) {
    if(typeof str === "string"){
        if(str.length === 0){
            return str;
        }
        let reversed = "";
        for(let i = str.length - 1; i >= 0; i--){
            reversed += str[i];
        }
        return reversed;
    }

    return null;
};

Algo.prototype.isPalindrome = function(str) {
    let palindrome = true;
    for(let i = 0; i < str.length; i++){
        // 0 1 2 3 4 5 6
        // r a c e c a r
        // b u l b
        if(str[i] !== str[str.length - 1 - i]){
            palindrome = false;
        }
    }
    return palindrome;
};

Algo.prototype.capitalize = function(str) {
    let capitalized = str.split(" ");
    capitalized = capitalized.map( str => str[0].toUpperCase() + str.substr(1));
    capitalized = capitalized.join(" ");
    return capitalized;
};

module.exports = Algo;

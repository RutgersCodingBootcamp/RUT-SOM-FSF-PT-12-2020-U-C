function Algo() {}

Algo.prototype.reverse = function(str) {};

Algo.prototype.isPalindrome = function(str) {
    if(typeof str === "string"){
        let palindrome = true;
        for(let i = 0; i < str.length; i++){
            if(str[i] !== str[str.length - 1 - i]){
                palindrome = false;
            }
            // 0 1 2 3 4 5 6
            // r a c e c a r
            // i = 0
            // other = 6
            // i = 1
            // other = 5
            // i = 2
            // other = 4

        }
        return palindrome;
    }
    return false;
};

Algo.prototype.capitalize = function(str) {};

module.exports = Algo;

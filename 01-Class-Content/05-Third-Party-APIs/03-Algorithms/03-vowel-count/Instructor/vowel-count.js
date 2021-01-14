// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    if(typeof str !== 'undefined' && str !== null && str.length > 0){
        var vowelCount = 0;
        var vowels = "aeiou";
        for(var i = 0; i < str.length; i++){
            // console.log(str[i]);
            if(vowels.indexOf(str[i].toLowerCase()) >= 0){
                vowelCount++;
            }
        }
        return vowelCount;
    }
    return 0;
};

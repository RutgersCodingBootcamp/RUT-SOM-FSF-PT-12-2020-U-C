// Require dependencies.
var Benchmark = require('benchmark');
var generate = require("../shared/generate");

// Generate array of given length.

// for (var i = 0; i < stuff.length; i++) {
//   if (stuff[i] === randomValue) {
//     console.log(i + " : " + randomValue);
//   }
// }
// you have to add linear search 
function linearSearch(searchTerm, arr){
  for(var i = 0; i < arr.length; i++){
      if(arr[i] === searchTerm){
          return arr[i];
      }
  }
}

// you have to add the benchmark functionality
var suite = new Benchmark.Suite;
suite
  .add("LinearSearch", function(){
    var length = 14;
    var stuff = generate(length);
    var randomValue = stuff[Math.floor(Math.random() * length)];
    
    linearSearch(randomValue, stuff);
  })
  .on('complete', function() {
    // you have to print the result to console.
    console.log(this[0].stats.mean);
  })
  .run();



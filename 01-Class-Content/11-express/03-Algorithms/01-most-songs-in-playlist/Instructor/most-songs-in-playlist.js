// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  // add your code here...
  // need the sorted array so that we can look at the smaller songs first
  // 1 0 -1 are all valid return values for the sort function to determine sort order
  let sorted = arr.sort( (a, b) => a < b ? -1 : 1 );
  // var sorted = arr.sort( function(a,b){
  //   if(a < b){
  //     return -1;
  //   }
  //   else{
  //     return 1;
  //   }
  // });
  // keep track of the count
  let count = 0;
  // need to go through the array until ...
  let sum = 0;
  // need to make sure we stop at the end of the array and also stop when we go over 60
  for(let i = 0; i < sorted.length && sum < 60; i++){
    // console.log(sorted[i]);
    sum += sorted[i];
    if(sum <= 60){
      count++;
    }
  }
  // console.log(sorted);
  return count;
};
console.log("my sort: " + mostSongsInPlaylist([1, 2,3, 4, 5 ,6 ,7 ,8, 9, 100]));
console.log("-------------------------------");
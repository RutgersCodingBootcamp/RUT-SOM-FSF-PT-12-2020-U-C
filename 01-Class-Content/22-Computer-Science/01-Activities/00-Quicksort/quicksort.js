// How to write a Quick Sort Algorithm
/***
 * 
 *   1. I need some data to organize 
 *   2. I need a way to pull out a pivot number to check from my data -- start with the first number 
 *   3. I need to loop through each number and check if the pivot number is greater or less than the pivot number 
 *   4. swap a routine that will swap the position of the pivot and organizing the green/purple groups
 *   5. We need to make sure that this process runs again and again until all the numbers are sorted --- we'll use recursion (a way to call a function within itself)
 */
// 1. I need some data to organize 
const data = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// 2. I need a way to pull out a pivot number to check from my data -- start with the first number
const getPivot = (arr, start=0, end=data.length) => {
  return start;
}
// 3. I need to loop through each number and check if the pivot number is greater or less than the pivot number
const quickSort = (arr, start=0, end=data.length -1) => {
   if(start >= end) { // 1 comparison
     return arr;
   }
   // 1. we need to start the pivot function with the first
   let pivotIndex = getPivot(arr, start, end);
   let pivot = arr[pivotIndex];
   // 4. swap a routine that will swap the position of the pivot and organizing the green/purple groups
   const swap = (arr, a, b) => {
      let t = arr[a];
      arr[a] = arr[b];
      arr[b] = t;
      return arr;
   };
   // What is the green group? Anything smaller than the pivot number
   // this number will change and grow as we go through the for loop
   let greenEnd = pivotIndex;

   // at max... we will do n * 2 comparisons ~ 2n comparisons
   // at min we will do 1 comparison ~ 1 comparison if we have 2 numbers in our array
   for(let i = pivotIndex + 1; i <= end; i++){ // heavy comparison
     // so how do we get move numbers into the greenEnd
     if(pivot > arr[i]) { // heavy
      // we need to change the greenEnd and then do a swap
      // full array, the number we are swaping, and the pivot number
      arr = swap(arr, i, greenEnd + 1);
      greenEnd++;
    }else {
      // this is the purple side the greater numbers
    }   
  }
  // when the loop is done the pivot number is the end and doesn't move anymore
  swap(arr, greenEnd, pivotIndex);
   // this is recursion
   arr = quickSort(arr, pivotIndex, greenEnd -1); // divide and conquer - green side
   arr = quickSort(arr, greenEnd + 1, end); // divide and conquer - purple side
   return arr;
};
console.log(quickSort(data));

// if the groups were always lopsided and the array was exactly in 
// reverse order, this quicksort would be O(n^2)

// n comparisons
// n -1 comparisons
// n -2
// n -3
// n - 4
// ...
// n - n = 0

//O(n^2)

// n comparisons
// n /2 comparisons
// n/ 4
// n/ 8 stop early because we evenly spaced by the pivot

// O(n log n) the constants were dropped because we are just approximating

// n/ 8 stop early because we evenly spaced by the pivot
// n/ 4
// n /2 comparisons
// n comparisons

// O(n log n)

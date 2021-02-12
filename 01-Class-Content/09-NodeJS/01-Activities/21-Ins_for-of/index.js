// // 1. Using arrays
// const songs = ['Bad Guy', 'Old Town Road', '7 Rings'];

// // value looks like a single value from the array
// // songs is the array... collection object ("basically looks like an array with an iterator")
// for (const value of songs) { // iterative format of a for loop
//   console.log(value);
// }
// for (const [i,value] of songs.entries()) { // iterative format of a for loop
//   console.log({value, i});
//   let Peter = "Peter";
//   console.log({value, i, i, i, value, i, i, Peter});
//   // console.log(value);
//   // console.log(i);
// }
// console.log(songs.entries());

// Bad Guy
// Old Town Road
// 7 Rings


// 2. Using map
const songs2 = new Map([['Bad Guy', 1], ['Old Town Road', 2]]);

for (const [key, value] of songs2) {
  console.log(`${key}'s chart position is ${value}`);
}
for (const singleArr of songs2) {
  const [key, value] = singleArr;
  console.log(singleArr);
  console.log(`${key}'s chart position is ${value}`);
}
// for (const [key, value] of songs2) {
//   console.log(`${key}'s chart position is ${value}`);
// }
for (const [peter, peter2] of songs2) {
  console.log({peter, peter2});
}

const songs3 = [{name: 'Bad Guy', position: 1}, {name: 'Old Town Road', position: 2}];

// for (const [key, value] of songs2) {
//   console.log(`${key}'s chart position is ${value}`);
// }
for (const { name, position} of songs3) {
  console.log({name, position});
}
for (const { position} of songs3) {
  console.log(position);
}

// Output:
// Bad Guy's chart position is 1
// Old Town Road's chart position is 2

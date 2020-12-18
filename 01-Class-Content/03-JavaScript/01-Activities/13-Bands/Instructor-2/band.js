// console.log("Hello my band file.");

// * Create an array of your favorite bands.
var myBands = ["ACDC", "Metallica", "Guns N Roses", "Guns and Roses", "Guns & Roses", "Nirvana", "One ok rock"];

// * With a prompt, ask the user's favorite band.
var userInput = prompt("What's your favorite band?");

// * If it's one of your favorites, alert: "YEAH I LOVE THEM!"
// console.log(userInput);
if(myBands[0].toLowerCase() === userInput.toLowerCase()){
    alert("YEAH I LOVE THEM!");
}
else if(myBands[1].toLowerCase() === userInput.toLowerCase()){
    alert("YEAH I LOVE THEM!");
}
else if(myBands[2].toLowerCase() === userInput.toLowerCase()){
    alert("YEAH I LOVE THEM!");
}
else if(myBands[3].toLowerCase() === userInput.toLowerCase()){
    alert("YEAH I LOVE THEM!");
}
else if(myBands[4].toLowerCase() === userInput.toLowerCase()){
    alert("YEAH I LOVE THEM!");
}
else if(myBands[5].toLowerCase() === userInput.toLowerCase()){
    alert("YEAH I LOVE THEM!");
}
else if(myBands[6].toLowerCase() === userInput.toLowerCase()){
    alert("YEAH I LOVE THEM!");
}

// myBands
// (7) ["ACDC", "Metallica", "Guns N Roses", "Guns and Roses", "Guns & Roses", "Nirvana", "One ok rock"]
// userInput
// "acdc"
// myBands === userInput
// false
// myBands.length
// 7
// myBands[0]
// "ACDC"
// myBands[0] === userInput
// false
// myBands[0].toLowerCase() === userInput.toLowerCase()
// true

// * If it's not, alert: "Nah. They're pretty lame."
else{
    alert("Nah. They're pretty lame.");
}
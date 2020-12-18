// console.log("Hello! you have run a command!");

// * Create an array of your favorite bands.
var bands = [
    "Guns n roses", // 0
    "The Fugees" // 1
];

// * With a prompt, ask the user's favorite band.
var userInput = prompt("What's your favorite band?");

// * If it's one of your favorites, alert: "YEAH I LOVE THEM!"
if(bands[1].toLowerCase() === userInput.toLowerCase()){
    alert("YEAH I LOVE THEM!");
}
else if(bands[0].toLowerCase() === userInput.toLowerCase()){
    alert("YEAH I LOVE THEM!");
}
// * If it's not, alert: "Nah. They're pretty lame."
else{
    alert("Nah. They're pretty lame.");
}

// I typed the following in the console of the web browser... for testing
// userInput
// "the fugees"
// bands
// (2) ["Guns n roses", "The Fugees"]
// bands === userInput
// false
// bands === 1
// false
// bands[1]
// "The Fugees"
// bands[1] === userInput
// false
// bands[1].toLowerCase() === userInput.toLowerCase()
// true
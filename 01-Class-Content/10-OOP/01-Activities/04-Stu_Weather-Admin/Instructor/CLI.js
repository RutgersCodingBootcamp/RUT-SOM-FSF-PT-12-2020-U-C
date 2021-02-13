// used documentation from Google
// used documentation nodejs -> fs (native)
// used documentation npmjs -> moment , weather-js
// look at function input parameters
// look for syntax errors with line numbers
// console.log

const WeatherAdmin = require("./WeatherAdmin.js");

// Hold the value whether someone is an "admin" or "user"
const loginType = process.argv[2];

// If they are a user... they will also need to provide a "name"
const userName = process.argv[3];

// And they will need to provide a "location"
const userLocation = process.argv[4];

// Create an instance of the WeatherAdmin. Remember WeatherAdmin is a constructor! Not an object.
const myAdmin = new WeatherAdmin();

if (loginType === "admin") {
  // console.log("I don't know"); -> we know that getData is after this
  myAdmin.getData();
}
else {
  // console.log("Help me");
  myAdmin.newUserSearch(userName, userLocation);
}

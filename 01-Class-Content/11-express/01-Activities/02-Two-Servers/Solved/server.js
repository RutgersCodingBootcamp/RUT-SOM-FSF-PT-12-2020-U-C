// We require/import the HTTP module
var http = require("http");

// =====================================================================

// Then define the ports we want to listen to
var PORTONE = 7000;
var PORTTWO = 7500;

// =====================================================================

// We need two different functions to handle requests, one for each server.
function handleRequestOne(request, response) {
  response.end("To err is human, but to really foul things up you need a computer.");
}

function handleRequestTwo(request, response) {
  response.end("Never trust a computer you can't throw out a window.");
}

// =====================================================================

// Create our servers
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

// =====================================================================

// Starting our servers
serverOne.listen(PORTONE, function() {

  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORTONE);
});

serverTwo.listen(PORTTWO, function() {

  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORTTWO);
});

// Require dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;

  // When we visit different urls, call the function with different arguments
  switch (path) {

  case "/food":
  case "/movies":
  case "/frameworks":
    return renderHTML(path + ".html", res);

  default:
    return renderHTML("/index.html", res);
  }
}

// function to take a filepath and respond with html
function renderHTML(filePath, res) {
  return fs.readFile(__dirname + filePath, function(err, data) {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

// Starts our server.
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});

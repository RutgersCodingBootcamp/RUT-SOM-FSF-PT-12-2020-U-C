const http = require('http');

const PORT = 8080;

function handleRequest(req, res) {

    // Saving the request data as a variable
    var requestData = "";
  
    // When the server receives data...
    req.on("data", function(data) {
  
      // Add it to requestData.
      requestData += data;
    });
  
    // When the request has ended...
    req.on("end", function() {
  
      // Log (server-side) the request method, as well as the data received!
      console.log("You did a", req.method, "with the data:\n", requestData);
      res.end();
    });
  
  }
  

const server = http.createServer(handleRequest);

// start our server
server.listen(PORT, () => {
    console.log(`server listening on: http://localhost: ${PORT}`);
})
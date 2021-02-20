const quote1 = "Imagination is more important than knowledge.";
const quote2 = "If I had to name my greatest strength, I guess it would be my humility. Greatest weakness, it's possible that I'm a little too awesome.";

const http = require("http");

const PORT = 7000;
const PORT2 = 7500;


function handleRequest(request, response){
    response.end(quote1);
}

function handleRequest2(request, response){
    response.end(quote2);
}

const server = http.createServer(handleRequest);
const server2 = http.createServer(handleRequest2);

server.listen(PORT, () => {
    console.log("Server is listening on http://localhost:" + PORT);
});

server2.listen(PORT2, () => {
    console.log("Server is listening on http://localhost:" + PORT2);
});
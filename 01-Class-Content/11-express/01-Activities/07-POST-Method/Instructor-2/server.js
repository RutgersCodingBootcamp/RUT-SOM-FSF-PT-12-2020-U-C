const http = require("http");
const fs = require("fs");

const PORT = 8888;

const handleRequest = (req, res) => {
    
    // res.end("Something");

    if(req.method.toLowerCase() === "get"){
        fs.readFile("index.html", "utf8", (err, data) => {
            if(err) {
                res.status(500);
                res.end();
            }
            else{
                res.end(data);
            }
        })
    }
    else{
        // we are going assume this is a post
        // build a requestData string
        let requestData = "";
        req.on("data", (data) => requestData += data);

        req.on("end", () => {
            console.log("We have received data:");
            console.log(requestData);
            res.end("Data received for the order:" + requestData);
        });
    }
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    let seconds = 0;
    setInterval(() => {
        seconds += 1;
        console.log(`I have been listening at http://localhost:${PORT} for ${seconds} seconds`);
    }, 1000);
});
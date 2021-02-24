const http = require("http");
const fs = require("fs");

const PORT = 8888;

const handleRequest = (req, res) => {
    // res.end("Hot Tamale");
    console.log(req.method);
    if(req.method.toLowerCase() === "get"){
        fs.readFile("index.html", "utf8", (err, data)=>{
            if(err){
                res.writeHead(500);
                res.end();
                return;
            }
            res.end(data);
        });
        // res.end("You did a get");
    }
    else{
        // res.end("You did a post");

        let requestData = "";

        req.on("data", data => requestData += data);

        req.on("end", () => {
            console.log("You did a post with this data: ");
            console.log(requestData);
            res.end()
        });
    }
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => console.log("Listening... really I am on http://localhost:" + PORT));

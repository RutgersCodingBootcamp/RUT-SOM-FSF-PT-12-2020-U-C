const http = require('http');
const fs = require('fs');

const PORT = 8080;

const showHomepage = (req, res) => {
    fs.readFile("./index.html", "utf8", (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end();
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
};

const renderList = (req, res, heading, list) => {
    fs.readFile("./list.html", "utf8", (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end();
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        let foods = data;
        foods = foods.replace("<!-- heading -->", heading);
        foods = foods.replace("<!-- heading -->", heading);

        foods = foods.replace("<!-- list -->", list.map(item => `<li>${item}</li>`).join(""));
        res.end(foods);
    });
}
const showFavoriteFoods = (req, res) => {
    let heading = "Favorite Foods";
    let list = ["Chicken Quesadilla", "Chicken Parm", "Hot Tamale", "Nachos"];
    renderList(req, res, heading, list);
};


const showFavoriteLanguages = (req, res) => {
    let heading = "Favorite Languages";
    let list = ["Java", "Javascript", "PHP"];
    renderList(req, res, heading, list);
};


const showFavoriteCSS = (req, res) => {
    let heading = "Favorite CSS";
    let list = ["Bootstrap"];
    renderList(req, res, heading, list);
};

const show404 = (req, res) => {
    fs.readFile("./404.html", "utf8", (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end();
        }
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(data);
    });
};

const handleRequest = (req, res) => {
    // res.end("Tamale");

    const path = req.url;

    switch (path) {

        case "/":
            showHomepage(req, res);
            break;
        case "/foods":
            showFavoriteFoods(req, res);
            break;

        case "/languages":
            showFavoriteLanguages(req, res);
            break;
        case "/css":
            showFavoriteCSS(req, res);
            break;
        default:
            show404(req, res);
            break;
    }
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => console.log(`Hey, listen. Go to http://localhost:${PORT}`));

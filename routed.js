const http = require("http");
const fs = require("fs");
var server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.write("<h1> Welcome to Home Page</h1>")
        res.end();
    } else if (req.url == "/about") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.write("<h1> Welcome to About Page</h1>")
        res.end();

    } else if (req.url == "/gallery") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.write("<img src='/images'> Gallery </img>")
        res.end();

    } else if (req.url == "/images") {
        res.writeHead(200, {
            "Content-Type": "image/jfif"
        });
        var d = fs.readFileSync("images.jfif")
        res.end(d);

    } else {
        res.writeHead(404, {
            "Content-Type": "text/plain"
        });
        res.write("Page Not Found");
        res.end();
    }
});
server.listen(3002, () => {
    console.log("Server is running on port 3001");
})
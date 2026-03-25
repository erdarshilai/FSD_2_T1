const http = require("http");
// 1.create a server
var server = http.createServer((req, res) => {
    // 2.set headers
    console.log(req.url);
    
    res.writeHead(200, { 'content-type': "text / plain" });
    // 3. Write content
    res.write("<h1> hello World </h1>");
    //4. end response
    res.end("LAST LINE");
});
// 5.start your server
server.listen(3080, () => { console.log("server started");
})

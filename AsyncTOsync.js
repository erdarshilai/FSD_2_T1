const fs = require("fs");

fs.writeFile("a4.txt", "Hello world", (err) => { 
    if (err)
        console.log("cant read" + err);
    console.log("write successful");

    fs.readFile("a4.txt", "utf-8", (err, data) => {
        if (err)
            console.log("cant read" + err);
        console.log("Your data is:" + data);
    })
    
})
// // ue loop of your choice to print all the values of given object
// var ar = [10, 20, 30]
// var ob = { name: "P", age: 18 }

// for (x in ar) {
//     console.log(x + " " + ar[x]);

// }
// for (x in ob) {
//     console.log(x+" "+ob[x]);
    
// }
// for (x of ar) {
//     console.log(x);

// }
// for (x of ob) {
//     console.log(ob);
    
// }

var sub = {
    "FSD": [{ "Topic": "HTML", "course": "Beginner", "content": ["tags", "table", "form"] },
    {
        "Topic": "Css",
        "course": "Beginner",
        "content": ["tags", "table", "form"]
    }]
}

for (x in sub.FSD) { 
    for (y in sub.FSD[x]) { 
        console.log(y+" --> "+sub.FSD[x][y]);
    
    }
}
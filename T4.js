// given n objects inside a json array containing name and age of a person,find the eldest person .
var p = [{ name: "a", age: 18 },
    {
        name: "b",
        age: 19
    },
    {
        name: "c",
        age: 22
    },
    {
        name: "c",
        age: 32
    },
    {
        name: "d",
        age: 87
    },


    
]
var sorted = p.sort((a, b) => (b.age - a.age));
console.log(sorted[0].name + " is eldest and has age "+ sorted[0].age);

var sorted = p.sort((a, b) => (a.age - b.age));
console.log(sorted[0].name + " is Youngest and has age " + sorted[0].age);

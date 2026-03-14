// // given a json Array,create a json object using a function where 1st element of array is key and last element is value
// var ar = ["abc", "bgdf", "asdf", "adf"];
// f1(ar);
// function f1() { 
//     var ob = {};
//     ob[ar[0]] = ar[ar.length - 1];
//     console.log(ob);
    

// }

var obj = JSON.parse(`{"fruit":"apple"}`, function (a, b) { if (b == "apple") return "orange"; else return b; });
console.log(obj);

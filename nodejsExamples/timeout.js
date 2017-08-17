// Author: Madhu Chakravarthy
// Date: 02-08-2017
/*
console.log("First")
setTimeout(function () {
    console.log("Second")
},0);
console.log("Third")
*/
console.log("First")
setImmediate(function () {
    console.log("Second")
})
console.log("Third")

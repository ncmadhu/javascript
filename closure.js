// Author: Madhu Chakravarthy
// Date: 17-04-2017

var counterTest = (function() {
    var counter = 0
    return function(){return counter += 1}
})()

console.log(counterTest())
console.log(counterTest())
console.log(counterTest())
console.log(counterTest())


//Author: Madhu Chakravarthy
//Date: 16-04-2017

var fibonacci = function(n) {
    if(n == 0) {
        return 0
    } else if(n == 1) {
        return 1
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(7))

var fibonacciSeries = function(n) {

    var fs = []
    var n1 = 0
    fs.push(n1)
    if(n == 0) {
        return fs
    }
    var n2 = 1
    fs.push(n2)
    if(n == 1) {
        return fs
    }

    for(var i=2; i<n;i++) {
        n3 = n1 + n2
        fs.push(n3)
        n1 = n2
        n2 = n3
    }
    return fs

}

console.log(fibonacciSeries(8))

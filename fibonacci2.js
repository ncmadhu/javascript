// Author: Madhu Chakravarthy
// Date: 20-04-2017

var fibonacci_series = function(n) {
    
    var arr = []
    var fibonacci_series2 = function(n) {
        if(n===0) {
            arr.push(0)
        } else if(n===1) {
            arr.push(0,1)
        } else {
            fibonacci_series2(n-1)
            arr.push(arr[arr.length -1] + arr[arr.length-2])
        }
    }
    fibonacci_series2(n)
    return arr
}
console.log(fibonacci_series(0))
console.log(fibonacci_series(1))
console.log(fibonacci_series(2))
console.log(fibonacci_series(3))
console.log(fibonacci_series(4))
console.log(fibonacci_series(5))
console.log(fibonacci_series(6))
console.log(fibonacci_series(7))
console.log(fibonacci_series(8))
console.log(fibonacci_series(9))
console.log(fibonacci_series(10))
console.log(fibonacci_series(11))
console.log(fibonacci_series(12))
console.log(fibonacci_series(13))
console.log(fibonacci_series(14))
  

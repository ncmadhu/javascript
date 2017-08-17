// Author: Madhu Chakravarthy
// Date: 17-08-2017

var factorial = function(number) {

    if(number == 0 || number == 1) {
        return 1
    } else {
        return number * factorial(number -1)
    }
}

console.log(factorial(6))

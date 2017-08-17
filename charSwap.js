// Author: Madhu Chakravarthy
// Date: 10-08-2017

var charSwap = function(string) {

    var length = string.length

    if(length < 3) {
        return string
    }

    var i = 0

    var arrayString = string.split("")

    while(i < length -2) {

        var temp = arrayString[i]
        arrayString[i] = arrayString[i+2]
        arrayString[i+2] = temp
        i += 3
        

    }

    return arrayString.join('')
    
}

console.log(charSwap("abcdefgh"))
console.log(charSwap("abcdefghi"))
console.log(charSwap("ab"))

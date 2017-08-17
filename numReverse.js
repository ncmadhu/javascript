// Author: Madhu Chakravarthy
// Date: 17-08-2017

var numReverse = function(num) {

    var numArray = num.toString().split('')
    var reverseNum = 0

    for(let i=0; i< numArray.length; i++) {
        var n = parseInt(numArray[i]) * Math.pow(10, i)
        reverseNum += n
    }
    console.log(reverseNum)
}

numReverse(23)
numReverse(232)
numReverse(20)

// Author: Madhu Chakravarthy
// Date: 17-04-2017

var OlogN = function(string) {

    var len = string.length
    var halfLen = len/2
    var revStr = new Array(len)
    for(var i=0;i<halfLen;i++) {
        revStr[i] = string[len - 1 - i]
        revStr[len - 1 -i] = string[i]
    }
    return revStr.join('')
}
console.log("TEST: " + OlogN("TEST"))
console.log("MALAYALAM: " + OlogN("MALAYALAM"))
console.log("MALAY: " + OlogN("MALAY"))

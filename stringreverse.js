// Author: Madhu Chakravarthy
// Date: 16-04-2017

var strReverse = function(string){

    var revStr = ""
    var i = string.length - 1
    for(;i>=0;i--) {
        revStr = revStr + string[i]
    }
    return revStr
}

console.log("TEST: " + strReverse("TEST"))
console.log("MALAYALAM: " + strReverse("MALAYALAM"))
console.log("MALAY: " + strReverse("MALAY"))

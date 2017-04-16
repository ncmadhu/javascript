// Author: Madhu Chakravarthy
// Date: 16-04-2017

var anagram =  function(word, string) {

    var length = word.length
    var isAnagram =  true
    for(var i=0;i<length;i++) {
        var index = string.indexOf(word[i])
        if(index != -1) {
            string = string.substring(0,index) + string.substring(index + 1, string.length)
        } else {
            return false
        }
    }
    return isAnagram

}

console.log("ARMY, MARY: " + anagram("ARMY", "MARY"))
console.log("TESTS, ZXYZ: " + anagram("TESTS", "ZXYZ"))


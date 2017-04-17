// Author: Madhu Chakravarthy
// Date: 16-04-2017


var palindrome = function(string) {

    if(string) {
        var i = 0
        var j = string.length - 1
        var isPalindrome = true
        for(; i <= string.length/2; i++,j--) {
            if(string[i] != string[j]) {
                isPalindrome = false
                break
            }
            if(i >= j) {
                break
            }
        }
        return isPalindrome
    } else {
        return false
    }
}

console.log("EMPTY STRING: " + palindrome(""))
console.log("M: " + palindrome("M"))
console.log("ABBA: " + palindrome("ABBA"))
console.log("ASDA: " +  palindrome("ASDA"))
console.log("MALAYALAM: " + palindrome("MALAYALAM"))
console.log("MALXYALAM: " + palindrome("MALXYALAM"))


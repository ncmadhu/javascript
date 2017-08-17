// Author: Madhu Chakravarthy
// Date: 16-08-2017

var isAlpha = function(ch) {

    if(ch >= 'A' && ch <= 'Z' || ch >= 'a' && ch <= 'z') {
        return true
    } else {
        return false
    }

}

var reverseOnlyAlpha =  function(string) {

    var stringArray = string.split('')

    var end = string.length - 1 
    var index = 0

    while(index < end) {

        while(!isAlpha(string[index])) {
            index += 1
            if(index > end) {
                return stringArray.join('')
            }
        }

        while(!isAlpha(string[end])) {
            end -= 1
            if(end < index) {
                return stringArray.join('')
            }
        }

        if(index < end) {
            var temp = stringArray[index]
            stringArray[index] = stringArray[end]
            stringArray[end] = temp 
        }
        index += 1
        end -= 1
    }

    return stringArray.join('')
}

console.log(reverseOnlyAlpha("madhu$"))
console.log(reverseOnlyAlpha("m$adhu$"))
console.log(reverseOnlyAlpha("a,b$c"))
console.log(reverseOnlyAlpha("aa,b$$$$"))
console.log(reverseOnlyAlpha("$a$$$$b$$"))
console.log(reverseOnlyAlpha("a!!!b.c.d,e'f,ghi"))


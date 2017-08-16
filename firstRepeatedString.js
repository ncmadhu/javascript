// Author: Madhu Chakravarthy
// Date: 16-08-2017

var repeatedString =  function(string) {

    var hashMap = {}

    var arrayString = string.split(" ")

    for (let word of arrayString) {

        if(word in hashMap) {
            hashMap[word] += 1
        } else {
            hashMap[word] = 1
        }

    }

    for (let word of arrayString) {

        if(hashMap[word] > 1) {
            return word
        }
    }

    return "No repeated word"

}

console.log(repeatedString("Ravi had been"))
console.log(repeatedString("Ravi had been telling he had been"))

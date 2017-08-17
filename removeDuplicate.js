// Author: Madhu Chakravarthy
// Date: 17-08-2017

var removeDuplicate = function(array) {

    var newArray = []
    var present = {}
    for(let i=0; i<array.length; i++) {
        var elem = array[i]
        if(!(elem in present)) {
            present[elem] = true
            newArray.push(elem)
        }
    }

    return newArray
}

console.log(removeDuplicate([2,1,1,2,3,4,5]))

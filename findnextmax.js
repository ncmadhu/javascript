// Author: Madhu Chakravarthy
// Date: 17-08-2017

var nextmax =  function(array) {

    var max1 =  array[0]
    var max2 = array[1]

    for(let i=0; i < array.length -1; i++) {

        if(array[i] > max1) {
            max1 = array[i]
        }

        if(array[i+1] > max2) {
            max2 =  array[i+1]
        }

        if(max2 > max1) {
            var temp = max1
            max1 = max2
            max2 = temp 
        }

    }

    return max2
}

console.log(nextmax([1,2,3,4,5]))
console.log(nextmax([5,4,3,2,1]))
console.log(nextmax([5,8,3,9,1]))

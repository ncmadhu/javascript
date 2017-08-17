// Author: Madhu Chakravarthy
// Date: 17-08-2017

var mergeSort =  function(array) {

    var length = array.length

    if(length == 1) {
        return array
    }

    var middle =  length / 2
    var firstHalf =  mergeSort(array.slice(0,middle))
    var secondHalf = mergeSort(array.slice(middle))

    return merge(firstHalf, secondHalf)

}

var merge = function(arr1, arr2) {

    var arr3 = []

    while(arr1.length > 0 && arr2.length > 0) {

        if(arr1[0] > arr2[0]) {
            arr3.push(arr2.splice(0,1)[0])
        } else {
            arr3.push(arr1.splice(0,1)[0])
        }
    }

    while(arr1.length > 0) {
        arr3.push(arr1.splice(0,1)[0])
    }

    while(arr2.length > 0) {
        arr3.push(arr2.splice(0,1)[0])
    }
    return arr3
}


console.log(mergeSort([5,9,1,7,3,2,10,6,2]))
/*
a = [1,2,3,4,5]

while(a.length > 0) {
    console.log(a.splice(0,1))
}
*/

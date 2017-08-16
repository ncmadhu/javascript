// Author: Madhu Chakravarthy
// Date: 16-08-2017

var sumOfMatrix =  function(matrix) {

    var sum = 0

    for(let numbers of matrix) {

        for(let num of numbers) {
            sum += num
        }
    }
    console.log(sum)
}

sumOfMatrix([[1,0,0], [8, -9, -1]])
sumOfMatrix([[1,1,1], [8, 8, 8]])

// Author: Madhu Chakravarthy
// Date: 14-08-2017

var node = function(array) {

    var length = array.length

    if(length == 0) {
        return null 
    }

    var middle = Math.floor(length/2)

    this.value = array[middle]
    this.left = new node(array.slice(0,middle))
    this.right = new node(array.slice(middle+1))

    return this
}

n = node([1,2,3,4,5,6,7,8])
console.log(n.value)
console.log(n.left.value)
console.log(n.right.right.value)
n = node([1,2,3,4,5,6,7])
console.log(n.value)
console.log(n.left.value)





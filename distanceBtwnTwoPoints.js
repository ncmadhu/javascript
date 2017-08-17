// Author: Madhu Chakravarthy
// Date: 16-08-2017

var distance =  function(coOrd1, coOrd2) {

    var x = Math.abs(coOrd1[0] - coOrd2[0])
    var y = Math.abs(coOrd1[1] - coOrd2[1])

    var distance = Math.round(Math.sqrt(Math.pow(x,2) + Math.pow(y,2)))

    console.log(distance)
}

distance([0,0], [2,2])
distance([-20,23], [-15,68])
distance([30,37], [79,-51])
distance([-69,63], [57,11])


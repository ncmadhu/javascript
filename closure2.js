// Author: Madhu Chakravarthy
// Date: 20-04-2017

var closure2 = function() {

    for(var i=0;i<4;i++){
        (function(x){setTimeout(function(){console.log(x)},x)})(i)
    }
}
closure2()

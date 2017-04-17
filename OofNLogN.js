// Author: Madhu Chakravarthy
// Date: 17-04-2017 

// Outer loop runs n times - linearly
// Inner loop run does not increase linearly with n
var nLogn = function(n) {

    for(var i=1;i<=n;i++) {
        for(var j=1;j<=n;j*=2) {
            console.log(i + ":" + j)
        }
    }
}

nLogn(5)
nLogn(8)
nLogn(10)

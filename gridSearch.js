// Author: Madhu Chakravarthy
// Date: 16-08-2017

var gridSearch =  function(grid, string) {

    var stringLength =  string.length

    var patternCoOrd = []

    for(var i=0; i < grid.length; i++) {

        for(var j=0; j < grid[0].length; j++) {
            
            if(j+stringLength - 1 < grid[0].length) {

                var tempArr = grid[i].slice(j,stringLength)

                var tempStr = tempArr.join('')

                var revStr = tempArr.reverse().join('')

                //left to right or right to left
                if(tempStr == string || revStr == string) {
                    patternCoOrd.push([i,j])
                }

            }

            if(i+string.length - 1 < grid.length) {

                var count = 0
                var topToBottom = []

                while(count < string.length) {

                    topToBottom.push(grid[i+count][j])
                    count += 1

                }

                var topToBottomStr = topToBottom.join('')
                var revTopStr = topToBottom.reverse().join('')

                if(topToBottomStr == string || revTopStr == string) {

                    patternCoOrd.push([i,j])
                }

            }

            if(i+ string.length - 1 < grid.length && j+string.length - 1 < grid[0].length) {

                var count = 0
                var diagonal = []

                while(count < string.length) {

                    diagonal.push(grid[i+count][j+count])
                    count += 1
                }

                var topToBottomStr = diagonal.join('')
                var revTopStr = diagonal.reverse().join('')

                if(topToBottomStr == string || revTopStr == string) {

                    patternCoOrd.push([i,j])
                }

            }

        }
    }

    return patternCoOrd
}

grid = [['a','b','c'],['b','e','f'],['c','h','i']]
console.log(gridSearch(grid, 'abc'))
grid = [['c','d','c'],['b','e','f'],['a','h','i']]
console.log(gridSearch(grid, 'abc'))
grid = [['a','d','c'],['b','b','f'],['a','h','c']]
console.log(gridSearch(grid, 'abc'))
grid = [['a','b','c'],['b','b','f'],['a','h','c']]
console.log(gridSearch(grid, 'bc'))

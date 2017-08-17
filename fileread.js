// Author: Madhu Chakravarthy
// Date: 17-08-2017

var fs = require('fs')

var fileRead = function(filename) {

    var contents = fs.readFileSync(filename, 'utf8');
    return contents
}

var parseForIp = function(filename) {

    var ipPattern =  /\.*((25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-0]?)\.*/g
    var domainPattern = /(http(s?):\/\/)?(www\.)?([a-zA-Z0-9\.\-\_])+(\.[a-zA-Z]{2,3})+/g
    contents = fileRead(filename)
    var ips = []
    var domains = []
    for(let line of contents.split('\n')) {
        var ipMatch = line.match(ipPattern)
        if(ipMatch) {
            ips.push(ipMatch[0])
        }
        var domainMatch = line.match(domainPattern)
        console.log(domainMatch)
        if(domainMatch) {
            domains.push(domainMatch[0])
        }
    }
    return ips.concat(domains)
}

console.log(parseForIp("testfile.txt"))

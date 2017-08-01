// Author: Madhu Chakravarthy
// Date: 01-08-2017


const http =  require('http');
const spawn =  require('child_process').spawn;

http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/plain'})
    executeChildProcess(response)
}).listen(9090, 'localhost');

function executeChildProcess(response) {

    var cmd = spawn('ls', ['-lh', '/']);

    let output = [];

    cmd.stdout.on('data', function (data) {

        output.push(data)
    });

    cmd.stderr.on('data', function (data) {

        output.push(data)
    });

    cmd.on('close', function (code) {

        console.log(`child process exited: ${code}`)
        output = Buffer.concat(output).toString(); 
        response.write(output)
        response.end()
    });

}


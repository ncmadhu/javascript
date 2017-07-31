// Author: Madhu Chakravarthy
// Date: 31-07-2017

const http = require('http');

http.createServer(function (request, response) {

    const {headers, method, url} = request;

    let body = [];

    request.on('error', function (err) {

        console.error(err);

    }).on('data', function (chunk) {

        body.push(chunk);

    }).on('end', function () {

        body =  Buffer.concat(body).toString();

    });

    const responseBody = { headers, method, url, body };

    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.write(`headers: ${headers}, method: ${method}, url: ${url}`)
    response.write(`\n`)
    response.write(`body: ${body}`)
    response.write(`\n`)
    response.write(JSON.stringify(responseBody));
    response.end()

}).listen(9090, 'localhost');




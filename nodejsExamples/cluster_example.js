// Author: Madhu Chakravarthy
// Date: 01-08-2017

const http = require('http')
const cluster =  require('cluster')
const os =  require('os')

if (cluster.isMaster) {

    numCpus = os.cpus().length;

    console.log(`Have ${numCpus} cpus`);

    for (var i=0; i < numCpus; i++) {

        cluster.fork();
    }

    cluster.on('exit', function (worker, code, signal) {

        console.log(`Worker ${worker.process.pid} died`);
    });
} else {

    http.createServer(function (req, res) {

        processId = process.pid

        res.writeHead(200, {"Content-Type": "text/plain"})
        res.write(`Served from worker ${processId}`)
        res.end()
    }).listen(9090);
}

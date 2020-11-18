const cluster = require('cluster');
const http = require('http');
const numCpu = require('os').cpus().length - 2;

/*
işletim sistemlerinde her işlem için bir numara tanımlanır 
ve bu numaraya ye kısaca PID (Process İdentifier) adı verilir.
*/
console.log('is Master PID: ' + process.pid);

if (cluster.isMaster) { // isMaster ile dosya'yı çoğalta biliriz


    for (let i = 0; i < numCpu; i++) { // cpu sayısı kadar forkladık
        cluster.fork()
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log('child cluster died...', worker.process.pid);
    });
}

else {
    http.createServer((req, resp) => {
        resp.writeHead(200);
        resp.end('Cluster hello: ' + process.pid + '\n');

    }).listen(3000);
    console.log('Child Process started :' + process.pid);
}
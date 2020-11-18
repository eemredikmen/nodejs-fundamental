const cluster = require('cluster');

if (cluster.isMaster) {
    console.log('Master process' + process.pid);

    for (let i = 0; i < 4; i++) {

        console.log('Worker' + i + 'is startig..');
    }

    cluster.fork();

}

cluster.on('fork', (worker) => {
    console.log('\tfork event (worker ' + worker.process.pid + ')');
});






const http = require('http');

// argüman olarak 2'nici kullandık
// [0] => node 
// [1] => filename 

console.log('Process', process.argv[2]); // process id verdik

process.on('message', (m) => {
    // ana processeden mesaj gönderilecek

    console.log('Process' + process.argv[2] + 'has received a message : master' + m);

    if (m === 'KILL') {
        process.exit('master die...');
    }
});

// bu şekilde her bir id farklı portlarda dinleme yapabiliyor...

console.log('Server will start at : http://localhost:' + (1234 + parseInt(process.argv[2])));

http.createServer((req, resp) => {
    resp.writeHead(200); // 200 response verdik
    resp.end('hello : ' + process.argv[2] + '\n');
})
    .listen(1234 + parseInt(process.argv[2])) // verilen id'leri porta bind ettik

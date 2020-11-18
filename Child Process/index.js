const { spawn, fork } = require('child_process');

const ls = spawn('ls', []);

let childs = [];

for (let i = 0; i < 10; i++) {

    // ana process'e geri bildirimde bulunuyor

    childs[i] = fork(`${__dirname}/worker.js`, [i]);
    childs[i].on('message', (em) => {
        console.log("Process" + i + "say's" + em);
    })

}

// processlere belirli zaman aralıklarında mesaj gönderdik

for (let i = 0; i < 10; i++) {

    setTimeout(() => {
        childs[i].send('say hi!');
    }, i * 1000)

}


/*
const ls = spawn('ls', []); // işetim sistemi komutunu verdik

ls.stdout.on('data', (data) => {
    console.log(data);
})

ls.stdout.on('data', (data) => {
    console.log(data);
})

ls.on('close', (exitcode) => {
    console.log('Exit with' + exitcode);
})

*/

// 38.16 da kaldık
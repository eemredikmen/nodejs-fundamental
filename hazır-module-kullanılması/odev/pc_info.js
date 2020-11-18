const os = require('os');
const fs = require('fs');

const cpuSay = os.cpus().length;


let pc = function wireteFile() {

    let freeRam = byteToGb(os.freemem());
    let totalRam = byteToGb(os.totalmem());
    let useRam = (totalRam - freeRam).toFixed(2);
    let cpuSay = os.cpus().length;

    // dosya yazdırma işlemi

    fs.writeFile('pc_info.txt', pcInfo(), (err) => {
        if (err) 
            throw err;
    })

    function byteToGb(toplambyte) {
        // byte gb dönüştürdük
        return (toplambyte / 1024 / 1024 / 1024).toFixed(2);
    }

    function pcInfo() {
        return (` 
    Free Ram : ${freeRam} Total Ram : ${totalRam} Used Ram : ${useRam} Total Cpu : ${cpuSay}    
    `);
    }
}

exports.pc = pc;
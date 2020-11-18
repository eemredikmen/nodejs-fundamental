const yargs = require('yargs');
const chalk = require('chalk');

yargs.version('1.1.2');
yargs.command({
    // kişi ekle
    command: 'ekle',
    descripe: 'yeni kişi ekle',
    handler(argv) {
        console.log("isim :" + argv.isim + "telno :" + argv.tel)
    }
})

console.log(yargs.argv)

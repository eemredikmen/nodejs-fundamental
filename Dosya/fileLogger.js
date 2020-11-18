const fs = require('fs');
const path = require('path');

class Logger {
    constructor(fileName) {
        this.fileName = fileName;
    }
    addLog(logData) {
        console.log(path.resolve(__dirname) + "/" + this.fileName);
        fs.appendFileSync(
            path.resolve(__dirname) + "/" + this.fileName, new Date() + ' :' + logData + "\n", (err) => {
                if (err) {
                    throw err;

                }
            });
    }
}

const fileLogger = new Logger('logs.txt');
module.exports = fileLogger;

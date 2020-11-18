const fileLogger = require('./fileLogger');

fileLogger.addLog('Nodejs first file created');

for (let i = 0; i < 10; i++) {
    fileLogger.addLog('Number : ' + i + 'started');
    console.log(i);
    
    fileLogger.addLog('Number : ' + i + 'end');
} 
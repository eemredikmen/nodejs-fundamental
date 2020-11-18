const EmitterApi = require('./eventApi');

EmitterApi.on('MyCustomEvents', (msg) => {
    console.log('Event Occured other : ' + msg);
    console.log("Fire Count : " + EmitterApi.eventFİred);
});
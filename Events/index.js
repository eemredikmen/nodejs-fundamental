const EmitterApi = require('./eventApi');

EmitterApi.on('MyCustomEvents', (msg) => {
    console.log('Event Occured : ' + msg);
});

EmitterApi.on('MyCustomEvents', (msg) => {
    console.log('Event Occured2 : ' + msg);
});

require('./index2');

EmitterApi.fireEvents('MyCustomEvents', "Custom Events Fired: Hello");
EmitterApi.fireEvents('MyCustomEvent 2', "Custom Events Fired: Hello");




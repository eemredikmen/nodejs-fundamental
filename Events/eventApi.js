const eventEmitter = require('events');

class MyEventMechanizim extends eventEmitter { // events kütüphanesi dahil ettik

    constructor() {
        super();
        this.eventFİred = 0;

    }
    fireEvents(eventName, args) {
        this.eventFİred++;
        this.emit(eventName, args);
    }
}

const EmmiterApi = new MyEventMechanizim();
module.exports = EmmiterApi; // all exprots
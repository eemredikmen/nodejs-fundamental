function Name() {
    console.log('My name is emre');
    globalThis.console.log('Globall...')
}

Name();

let name = 'emre';
let sum = function (a, b) {
    console.log(a + b);
}

sum()

exports.one =name;
exports.fun =sum;
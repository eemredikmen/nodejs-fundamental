function doSomeNetwork() {

    return new Promise(function(resolve,reject) {

        console.log('Promise İçinde');

        setTimeout(() => {
            console.log('Promise return ediyor');
            resolve('done');
            reject('faild');
        }, 300)

    });
}

console.log('Promise öncesi');

let newtworkCall = new doSomeNetwork();

console.log('Promise çağrısı..');


newtworkCall.then((value) => {
    console.log('promise return edildi...');    
})
.catch(err => console.error('promise patladı...'))

console.log('program sonu...');

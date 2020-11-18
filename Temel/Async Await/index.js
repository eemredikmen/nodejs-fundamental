// Async Await

async function doSomeNetwork() {

    return new Promise(function (resolve, reject) {

        console.log('Promise İçinde');

        setTimeout(() => {
            console.log('Promise return ediyor');
            resolve('done');
            // reject('faild');
        }, 300)

    });
}

async function newtworkCaller() {
    console.log('before promise call');
    let resVal = await doSomeNetwork();
    console.log('After promise');
}

newtworkCaller();
console.log('Are we waiting?');

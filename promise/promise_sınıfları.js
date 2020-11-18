// Promise Sınıfları
/*

const promiseResolve = Promise.resolve('Başarılı bir promise');
const promiseReject = Promise.reject(new Error('Hatalı Promise'));


setTimeout(() => {
    promiseResolve.then(response => console.log(response));
    promiseReject.catch(err => console.error(err));

}, 3000)

*/

// * Promise dizisi alır tüm promisler bittikden sonra bize yen bir verir


const p1 = new Promise((resolve => {
    setTimeout(() => {
        resolve('3 saniyelik promise')
    }, 3000)
}));

const p2 = new Promise((resolve => {
    setTimeout(() => {
        resolve('4 saniyelik promise')
    }, 4000)
}));


const promiseAll = Promise.all([p1, p2]);

// ! reject durumunda resolve ekranda göstermez

promiseAll.then(sonuc => console.log(sonuc));

//* Kısace promisleri yarıştırır - hangisi önce biterse onu gösterir

const promiseRace =  Promise.race([p1,p2]);

promiseRace.then(result => console.log(result));






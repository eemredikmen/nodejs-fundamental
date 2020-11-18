// Promise Sınıfları

const promiseResolve = Promise.resolve('Başarılı bir şekilde promise sonuclandı') // işlemin bitmiş halini gösteren yapı
const promiseReject = Promise.reject(new Error('Hata oluştu...'));

setTimeout(() => {

    promiseResolve.then(response => console.log(response));
    promiseReject.catch(err => console.error(err));

}, 3000)

console.log(promiseResolve);
console.log(promiseReject);


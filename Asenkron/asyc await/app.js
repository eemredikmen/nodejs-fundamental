// * Ascync Await 

// ! async ifadesi mutlaka promise döneceğini ifade eder
// * Await kelimesi bir promisin olumlu dönüş yapmasını bekler

// async function test(data) {
//     // return data; 
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve('bu bir promisdir');
//         }, 3000)
//     });

//     let response = await promise; // 5 saniye bekliyecek resolve olmasını bekledi...
//     return response;
// }

// test('promise döndü')
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


// async function testData(data) {
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             if (typeof (data) == 'string') {
//                 resolve(data);
//             }
//             else
//                 reject(new Error('Lütfen string bir değer giriniz...'));

//         }, 3000)
//     });

//     const response = await promise;
//     return response;

// }

// testData('denemee')
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


async function getCurreny(url){

    url = 'https://api.exchangeratesapi.io/latest';
  
    const response = await fetch(url); // response object
    const data = await response.json(); // * tekrardan promise döndüğü için beklettik

    console.log(data);

}

getCurreny(this.url);
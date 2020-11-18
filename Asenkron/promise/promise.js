// * Başarılı (resolve) ve başarısız (reject) durumlarda çağıralacak iki fonksiyon ile birlikte oluşturuyoruz. 

const myPromise = new Promise(function (resolve, reject) {
    console.log('işlem başladı...');

    setTimeout(() => {
        // resolve('üç saniyelik işlem')
        reject('hata...')
    }, 3000)
})

myPromise
    .then(data => console.log(data))
    .catch(err => console.error('Found' + err));

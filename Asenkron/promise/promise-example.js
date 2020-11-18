console.log('Program Başladı...');
console.log('Program Bitti...');

function getUser(id) {

    // * Fonksiyon bittiğindde promise dönecek
    
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve({ id: id, ad: 'emre ' })
        }, 3000)
    })
}


function getCourse(userName) {
    return new Promise(function (resolve, reject) {
        console.log(userName + 'kişinin kursları getiriliyor...');
        setTimeout(() => {
            resolve(['python ', 'javascirpt', 'nodejs']);
        }, 300)
    })
}

function getComment(courseName) {
    return new Promise(function (resolve, reject) {
        console.log(courseName + 'isimli kursun yorumları getiriyor...')
        setTimeout(() => {
            resolve('gayet iyi bir kurs...');
        }, 3000)
    })
}


getUser(178)
    .then(user => getCourse(user.ad))
    .then(comment => getComment(comment[0]))
    .then(excomment => console.log('çok iyi...'))
    .catch(err => console.log(err));



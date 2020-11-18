console.log('Progaram Başladı..')

getUser(121, (userObject) => {
    getCourse(userObject.ad, kursDizisi => {
        getComment(kursDizisi[0])
    });
});

console.log('Program bitti...');

function getUser(id, callback) {
    console.log(id + 'User getiriliyor...')
    setTimeout(() => {
        callback({ id: id, ad: 'emre' })
    }, 1500);
}


function getCourse(userName, callback) {
    console.log(userName + 'kişi kursları')

    setTimeout(() => {
        callback(['nodejs', 'javascipt', 'python']);
    }, 2000)
}

function getComment(kursAdi) {
    console.log(kursAdi + 'isimli kurs adi yorumları getiriliyor...');
    setTimeout(() => {
        console.log('harika bir kurs')
    }, 2000)
}


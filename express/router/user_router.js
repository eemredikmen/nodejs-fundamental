const express = require('express');
const app = express();
const joi = require('@hapi/joi');
const router = express.Router()


// * Rotalarımızı yönlendirmek için app yerine router yazdık

const kullanicilar = [{
        id: 1,
        ad: 'emre',
        yas: 21,
    },
    {
        id: 2,
        ad: 'irem',
        yas: 30,
    },
    {
        id: 3,
        ad: 'ali',
        yas: 23
    }
];

// ! /users/users gelen isteklerlerin başında users olduğu için users kısmını sildik

router.get('/:id', (req, res) => {

    const bulunanUser = users.find(user => parseInt(user.id === req.params.id));
    if (bulunanUser)
        res.send(bulunanUser);
    else
        res.status(404).send(req.params.id + 'id li kullanıcı bulunamdı....')

});

function userValidate(user) {

    const schema = joi.object({
        ad: joi.string().min(3).max(30).required(),
        yas: joi.number().integer().min(18).max(65).required()
    });
    return schema.validate(user);
}


router.post('/', (req, res) => {
    // ! joi kontrol işlemlerimizi yapmamızı sağlayan bir moduldür

    const {
        error
    } = userValidate(req.body);

    if (error) {
        res.status(400).send(error.details[0].message);
    } else {
        // yeni kullanıcı bodye ekledik

        const yeniKullancı = {
            id: kullanicilar.length + 1,
            ad: req.body.ad,
            yas: req.body.yas
        }

        kullanicilar.push(yeniKullancı);
        res.send(yeniKullancı);
    }
});

router.put('/:id', (req, res) => {
    const bulunanUser = kullanicilar.find(user => user.id === parseInt(req.params.id));
    if (!bulunanUser) {
        // ! return edilmezse kodlar aşağı doğru çalışmaya devam eder
        return res.status(404).send(`${req.params.id} li kullanıcı bulunamadı...`);
    }
    // içerinde eror varsa validate fonksiyonun içerisinde kullan

    const {
        error
    } = userValidate(req.body);

    // eror varsa

    if (error) {
        res.status(400).send(error.details[0].message);
    } else {

        // * user güncelleme

        bulunanUser.ad = req.body.ad;
        bulunanUser.yas = req.body.yas;

        res.send(bulunanUser);
    }
});


router.get('/', (req, res) => {
    if (req.query.ters) {
        res.send(kullanicilar.reverse());
    } else {
        res.send(kullanicilar);
    }

});

router.delete('/:id', (req, res) => {

    const bulunanUser = kullanicilar.find(user => user.id === parseInt(req.params.id));

    if (bulunanUser) {
        //* kullanıcının index numarasını aldık
        const index = kullanicilar.indexOf(bulunanUser);
        kullanicilar.splice(index, 1);
        res.send(bulunanUser);
    } else {
        res.status(404).send(req.params.id + 'id li kullanıcı bulunamdı....')
    }

});


module.exports = router;
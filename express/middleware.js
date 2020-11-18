const express = require('express')
const app = express()
const port = 5000

// * ara katmanlar middleware - middleware bir fonskiyondur
//* next ile de bir sonraki middleware fonksiyonunu çalıştırabiliriz
// * app.use ile middlewaremizi kullanabiliriz

function m1(req, res, next) {
    console.log("m1 deyim");
    // next();
}

// app.use(m1);

app.use((req, res, next) => {
    res.send('m2 tamamlandı...');
    req.time = Date.now();
    next();
});

//* filterelene middleware isteklere göre bölebilriz

app.get('/', (req, res) => {
    console.log('m3 root rotası req zamanı' + req.time);
    res.send('Zaman' + req.time);
});

app.post('/user', (req, res) => {
    console.log('m4');
})

console.log('Burada');

app.listen(port, () => {
    console.log(`Server started: ${port}`)
});
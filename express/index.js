const express = require('express');
const morgan = require('morgan');
const userRouter = require('./router/user_router');
const homeRouter = require('./router/home_router');
const erorRouter = require('./router/eror_router');
const app = express();
const port = 5000;

app.use(express.json());

// form verileri eklemek için express'in içindeki urlencoded kullandık

app.use(express.urlencoded({ extended: true }));

// statik dosya vermek için

app.use(express.static('public'));

// * artık tüm istekler burdan yönlendirelecek

app.use('/users',userRouter);


app.use(morgan('common'));


app.use('/',homeRouter);

// * girdiğimiz parametre dışında parametre gönderilirse sayfa bulunmadı olarak gösterilecek

app.use('/',erorRouter);
app.use('/users',erorRouter);
app.listen(port, () => console.log(`Sunucu Çalışıyor : ${port}`));
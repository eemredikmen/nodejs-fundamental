const express = require('express');
const dotenv = require('dotenv');
const connectDatabase = require('./helper/database/connectData');
const router =require('./routers/index');

// Enviroment Variables

dotenv.config({
    path: "./config/env/config.env"
});

// Mongodb Connection

connectDatabase();

const Port = process.env.PORT;
const app = express();


app.use("/api",router);

app.get('/',(req,res)=>{
    res.send('hello world');
})

app.listen(Port, () => {
    console.log(`Server Started: ${Port} : ${process.env.NODE_ENV}`);
});


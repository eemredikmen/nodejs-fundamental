const https = require('https');
const yargs = require('yargs');
const capitalWeather = require('./capital_weather');

// https.get('https://restcountries.eu/rest/v2/name/turkey', (response) => {

//     let data = ''; // boş bir string oluşturduk

//     response.on('data', chunk => {
//         // console.log(chunk);
//         data += chunk; // gelen veriyi callback ekledik
//     });

//     response.on('end', () => {
//         const jsonData = JSON.parse(data); // string dosyasını json'a çeviridi
//         if(jsonData != null){
//             console.log(jsonData);

//         }
//         else{
//             console.log('veri getirelemedi...');
//         }
//     })

//     // hata çıkma durumunda

// }).on('error', (err) => {
//     console.log(err.message);
// })

// http://api.openweathermap.org/data/2.5/weather?q=ankara&appid=073c38be9180d9f836519aa5725f1020


capitalWeather('japan');
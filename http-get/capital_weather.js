const axios = require('axios');

function findCapital(countryName) {
    axios.get('https://restcountries.eu/rest/v2/name/'+ countryName).then(res => {

        const ulke = res.data[0];
        const baskent = ulke.capital;
        const nufus = ulke.population;

        console.log(`Nufusu : ${ulke.population} Baskenti : ${ulke.capital}`);

        axios.get('http://api.openweathermap.org/data/2.5/weather?q= ' + baskent +
            '&appid=073c38be9180d9f836519aa5725f1020&lang=tr&units=metric').then(res => {
                console.log(res.data);
                console.log(`Başketi : ${res.data.name} Bugunkü hava : ${res.data.weather[0].description} Hava Sıcaklığı : ${res.data.main.temp} `);
            })
    });
}

module.exports = findCapital;


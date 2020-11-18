const express = require('express');
const app = express();
const port = 8080;

app.use((req, resp, next) => {
    resp.send('Hello express');
    next();
});

app.listen(port, () => {
    console.log('App started at 8080');
})

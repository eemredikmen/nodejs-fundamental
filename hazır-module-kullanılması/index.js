const path = require('path');
const fs = require('fs');

let parse = path.parse(__dirname);

fs.readdir('./', { withFileTypes: true }, function (file, err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(file[0].isDirectory());
    }
})

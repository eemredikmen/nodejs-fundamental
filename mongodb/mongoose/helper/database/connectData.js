const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log("Mongodb Connecitons Success");
        })
        .catch(err => {
            console.log(err);
        })
}

module.exports = connectDatabase;

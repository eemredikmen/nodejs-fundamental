const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide a number']
    },
 
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
 
    ,
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    },
    password: {
        type: String,
        minlength: [6, 'Please provide a password with min length 6'],
        required: [true, 'Please provide a password'],
        select: false //! verileri çektiğimizde alannın görünmemesi
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String
    },
    about: {
        type: String
    },
    place: {
        type: String
    },
    website: {
        type: String
    },
    profile_img: {
        type: String,
        default: "defualt.jpg"
    },
    bloked: { //* kullanıcı  blocklama işlemi
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('user', UserSchema);



const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => validator.isEmail(value),
            message: 'Invalid email address'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    phone: {
        type: String
    },
    address: {
        type: String
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
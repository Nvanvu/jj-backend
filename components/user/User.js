const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    tel: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})
const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
const mongoose = require('mongoose');

const EmployerSchema = mongoose.Schema({
    companyName: {
        type: String,
        required: true,
        unique: true,
        minLength: 3
    },
    inauguration: {
        type: String,
        required: true,
    },
    representative: {
        type: String,
        required: true,
        minLength: 4
    },
    numberOfEmployee: {
        type: Number,
        required: true
    },
    headquarters: {
        type: String,
        required: true,
        minLength: 10
    },
    officePhoneNumber: {
        type: String,
        required: true,
        minLength: 8
    },
    businessActivities: {
        type: String,
        required: true
    },
    charterCapital: {
        type: Number,
        required: true
    },
    website: {
        type: String,
        required: true,
        minLength: 15
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        required: true
    }
}, {
    timestamps: true
})

const EmployerModel = mongoose.model('Company', EmployerSchema);
module.exports = EmployerModel;
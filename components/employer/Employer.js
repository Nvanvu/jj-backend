const mongoose = require('mongoose');

const EmployerSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    company: {
        type: mongoose.Types.ObjectId,
        required: true
    }
}, {
    timestamps: true
})
const EmployerModel = mongoose.model('Employer', EmployerSchema);
module.exports = EmployerModel;
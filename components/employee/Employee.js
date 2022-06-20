const mongoose = require('mongoose');

const EmployerSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    careerObjective: {
        type: String,
        required: true,
        minLength: 50
    },
    education: {
        type: String,
        required: true,
        minLength: 5
    },
    major: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: true
    },
    fileCV: {
        type: String,
        required: true,
        minLength: 15
    },
    jobType: {
        type: String,
        required: true
    },
    vacancy: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        required: true
    }
}, {
    timestamps: true
})

const EmployerModel = mongoose.model('Employee', EmployerSchema);
module.exports = EmployerModel;
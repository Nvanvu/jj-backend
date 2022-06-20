const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    jobType: {
        type: String,
        required: true
    },
    vacancy: {
        type: String,
        required: true
    },
    major: {
        type: String,
        required: true
    },
    workContent: {
        type: String,
        required: true,
        minlength: 15
    },
    salary: {
        type: String,
        required: true
    },
    workingTime: {
        type: String,
        required: true
    },
    workPlace: {
        type: String,
        required: true,
        minlength: 15
    },
    qualification: {
        type: String,
        required: true
    },
    workExperience: {
        type: String,
        required: true
    },
    requirenment: {
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
});

const PostJobModel = mongoose.model('PostJob', postSchema);
module.exports = PostJobModel;
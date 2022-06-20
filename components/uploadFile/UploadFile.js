const mongoose = require('mongoose');

const uploadFileSchema = mongoose.Schema({
    url: {
        type: String,
        required: true,
        minlength: 15
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        required: true
    }
}, { timestamps: true })

const UploadFileModel = mongoose.model('uploadFile', uploadFileSchema);
module.exports = UploadFileModel;
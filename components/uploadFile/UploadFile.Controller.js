const cloudinary = require('cloudinary').v2;
const UploadFileModel = require('./UploadFile');
const streamifier = require('streamifier');

const uploadFile = async(req, res, next) => {
    try {
        const {
            url
        } = req.body;
        const upload = await UploadFileModel.create({
            url,
            createdBy: req.user._id
        })
        res.send({
            success: 1,
            message: 'Upload link successful.',
            data: upload
        })

    } catch (error) {
        res.send({ success: 0, message: error.message });
        return;
    }
}
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
    secure: true
});
const uploadFileToCloud = async(req, res) => {
    try {
        const streamUpload = (req) => {
            return new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    (error, result) => {
                        if (result) {
                            resolve(result);
                        } else {
                            reject(error);
                        }
                    });
                streamifier.createReadStream(req.file.buffer).pipe(stream);
            })
        }
        const result = await streamUpload(req);
        res.send({ success: 1, data: result.secure_url });
    } catch (error) {
        res.send({ success: 0, message: error.message });
        return;
    }
}

module.exports = { uploadFile, uploadFileToCloud }
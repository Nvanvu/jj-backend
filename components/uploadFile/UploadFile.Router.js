const router = require('express').Router();
const Upload = require('./UploadFile.Controller');
const auth = require('../middleware/VerifyToken');
const multer = require('multer');
const middleware = require('../middleware/VerifyEmployee');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'upload')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})
const memoryStorage = multer.memoryStorage();
const uploadWithMemoryStorage = multer({ storage: memoryStorage });
const upload = multer({ storage: storage });

router.post('/upload/f', auth.verifyToken, middleware.verifyEmployee, Upload.uploadFile);

router.post('/upload/f/cloud', auth.verifyToken, middleware.verifyEmployee, uploadWithMemoryStorage.single('file'), Upload.uploadFileToCloud);

module.exports = router;
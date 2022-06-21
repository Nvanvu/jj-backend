const router = require('express').Router();
const postJob = require('./PostJob.Controller');
const auth = require('../auth/Auth.VerifyToken');
const verify = require('../company/VerifyCompany');

router.post('/post/j', auth.verifyToken, verify.verifyCompany, postJob.postJob)
module.exports = router;
const router = require('express').Router();
const job = require('./PostJob.Controller');
const auth = require('../middleware/VerifyToken');
const middleware = require('../middleware/VerifyCompany');

router.post('/create/j', auth.verifyToken, middleware.verifyCompany, job.createPost);
router.get('/g/j/list', job.getJobs);


module.exports = router;
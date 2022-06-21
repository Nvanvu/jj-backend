const employer = require('./Employer.Controller');
const router = require('express').Router();
const auth = require('../middleware/VerifyToken');
const middleware = require('../middleware/VerifyCompany');

router.post('/create/update/employer', auth.verifyToken, middleware.verifyCompany, employer.createEmployer);

module.exports = router;
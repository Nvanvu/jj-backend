const employer = require('./Employer.Controller');
const router = require('express').Router();
const auth = require('../auth/Auth.VerifyToken');
const Company = require('../company/VerifyCompany');

router.post('/create/update/employer', auth.verifyToken, Company.verifyCompany, employer.createEmployer);

module.exports = router;
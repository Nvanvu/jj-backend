const company = require('./Company.Controller');
const router = require('express').Router();
const auth = require('../auth/Auth.VerifyToken');
const Company = require('./VerifyCompany');


router.post('/create/company', auth.verifyToken, Company.verifyCompany, company.createCompany);

module.exports = router;
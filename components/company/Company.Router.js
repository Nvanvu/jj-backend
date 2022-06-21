const company = require('./Company.Controller');
const router = require('express').Router();
const auth = require('../auth/Auth.VerifyToken');
const verify = require('./VerifyCompany');


router.post('/create/company', auth.verifyToken, verify.verifyCompany, company.createCompany);
router.get('/com/all', company.getCompanys);

module.exports = router;
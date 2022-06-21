const company = require('./Company.Controller');
const router = require('express').Router();
const auth = require('../middleware/VerifyToken');
const middleware = require('../middleware/VerifyCompany');


router.post('/create/company', auth.verifyToken, middleware.verifyCompany, company.createCompany);
router.get('/com/all', company.getCompanys);

module.exports = router;
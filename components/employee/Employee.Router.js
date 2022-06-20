const Employee = require('./Employee.Controller');
const router = require('express').Router();
const auth = require('../auth/Auth.VerifyToken');
const verify = require('./VerifyEmployee');


router.post('/create/employee', auth.verifyToken, verify.verifyEmployee, Employee.createEmployee);

module.exports = router;
const Employee = require('./Employee.Controller');
const router = require('express').Router();
const auth = require('../middleware/VerifyToken');
const middleware = require('../middleware/VerifyEmployee');


router.post('/create/employee', auth.verifyToken, middleware.verifyEmployee, Employee.createEmployee);

module.exports = router;
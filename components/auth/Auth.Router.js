const auth = require('../auth/Auth.Controller');
const router = require('express').Router();
const { registerSchema, loginSchema } = require('../auth/Auth.validate')

const validateInput = require('../middleware/validateInput');

router.post('/auth/register/user', validateInput(registerSchema, 'body'), auth.register);
router.post('/auth/login', validateInput(loginSchema, 'body'), auth.login);

module.exports = router;
const auth = require('../auth/Auth.Controller');
const router = require('express').Router();

router.post('/auth/register/user', auth.register);
router.post('/auth/login', auth.login);

module.exports = router;
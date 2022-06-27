const Joi = require('joi');

const registerSchema = Joi.object({
    username: Joi.string(),
    password: Joi.string().required().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&]){8,30}')),
    tel: Joi.string().min(8).max(11).required(),
    email: Joi.string().email().required(),
    role: Joi.string().required().min(4)
});
const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&]){8,30}')),
})
module.exports = { registerSchema, loginSchema };
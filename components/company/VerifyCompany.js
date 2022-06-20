const { verifyToken } = require('../auth/Auth.VerifyToken');

const verifyCompany = (req, res, next) => {
    verifyToken(req, res, () => {
        if (!['company'].includes(req.user.role)) {
            res.send({ status: 400, message: 'Token incorrect.' });
            return;
        }
        next();
    })
}
module.exports = { verifyCompany }
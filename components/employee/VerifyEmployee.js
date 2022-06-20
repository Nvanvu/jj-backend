const { verifyToken } = require('../auth/Auth.VerifyToken');

const verifyEmployee = (req, res, next) => {
    verifyToken(req, res, () => {
        if (!['user'].includes(req.user.role)) {
            res.send({
                status: 400,
                message: 'Token incorrect.'
            });
            return;
        }
        next();
    })
}
module.exports = { verifyEmployee }
const { verifyToken } = require('./VerifyToken');

const verifyEmployee = (req, res, next) => {
    verifyToken(req, res, () => {
        if (!['user'].includes(req.user.role)) {
            res.send({
                status: 400,
                success: 0,
                message: 'Token incorrect.'
            });
            return;
        }
        next();
    })
}
module.exports = { verifyEmployee }
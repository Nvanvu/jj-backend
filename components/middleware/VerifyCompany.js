const { verifyToken } = require('./VerifyToken');

const verifyCompany = (req, res, next) => {
    verifyToken(req, res, () => {
        if (!['company'].includes(req.user.role)) {
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
module.exports = { verifyCompany }
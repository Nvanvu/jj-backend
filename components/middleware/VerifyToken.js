const jwt = require('jsonwebtoken');
const UserModel = require('../user/User');

const verifyToken = async(req, res, next) => {
    const token = req.headers.authtoken;
    if (!token) {
        res.send({ status: 400, message: 'Token incorrect.' });
        return;
    }

    const jwtToken = token.split(' ')[1];

    await jwt.verify(jwtToken, process.env.SECRETKEY_ACCESSTOKEN, async(err, jwtToken) => {
        if (err) {
            res.send({ status: 400, message: 'Invalid token.' });
            return;
        }
        const { userId } = jwtToken;

        if (!userId) {
            res.send({ status: 400, message: 'Token incorrect.' });
            return;
        }
        const existedUser = await UserModel.findById({ _id: userId });
        if (!existedUser) {
            res.send({ status: 400, message: 'Token incorrect.' });
            return;
        }
        const cloneUser = JSON.parse(JSON.stringify(existedUser));
        req.user = {
            ...cloneUser,
            password: '',
            tel: '',
            email: ''
        };
        next();
    });
}

module.exports = { verifyToken }
const UserModel = require('../user/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { response } = require('express');

const register = async(req, res, next) => {
    try {
        const {
            password,
            email,
            tel,
            role
        } = req.body;
        const existedUsername = await UserModel.findOne({ username });
        if (existedUsername) {
            res.send({ status: 503, success: 1, message: 'User name dulicated.' });
            return;
        }

        const existedEmail = await UserModel.findOne({ email });
        if (existedEmail) {
            res.send({ status: 501, success: 1, message: 'Email duplicated.' });
            return;
        }
        const existedTel = await UserModel.findOne({ tel });
        if (existedTel) {
            res.send({ status: 502, success: 1, message: 'Tel duplicated.' });
            return;
        }

        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);
        const newUser = await UserModel.create({
            username: email,
            password: hashed,
            email,
            tel,
            role
        })
        const cloneUser = JSON.parse(JSON.stringify(newUser));
        res.send({
            success: 1,
            message: 'Successful.',
            data: {
                ...cloneUser,
                password: ''
            }
        })

    } catch (error) {
        res.send({ success: 0, message: error.message })
        return;
    }
}
const login = async(req, res, next) => {
    try {
        const { username, password } = req.body;
        const existedUser = await UserModel.findOne({ username });
        if (!existedUser) {
            res.send({ status: 400, success: 0, message: 'Username or password incorrect.' });
            return;
        }
        const existedPass = await bcrypt.compare(password, existedUser.password);
        if (!existedPass) {
            res.send({ status: 400, success: 0, message: 'Username or password incorrect.' });
            return;
        }
        const token = jwt.sign({
            userId: existedUser._id,
            username: existedUser.email,
            role: existedUser.role
        }, process.env.SECRETKEY_ACCESSTOKEN, {
            expiresIn: process.env.ACCESSTOKEN_TIME
        })

        res.send({
            success: 1,
            message: 'Successful.',
            data: {
                userId: existedUser._id,
                username: existedUser.username,
                role: existedUser.role,
                accessToken: token
            }
        })
    } catch (error) {
        res.send({ status: 400, success: 0, message: error });
    }
}
module.exports = { register, login };
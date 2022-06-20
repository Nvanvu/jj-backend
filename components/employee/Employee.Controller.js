const EmployerModel = require('./Employee');

const createEmployee = async(req, res, next) => {
    try {
        const {
            firstName,
            lastName,
            careerObjective,
            education,
            major,
            skills,
            fileCV,
            jobType,
            vacancy,
            salary
        } = req.body;

        const newEmployee = await EmployerModel.create({
            firstName,
            lastName,
            careerObjective,
            education,
            major,
            skills,
            fileCV,
            jobType,
            vacancy,
            salary,
            createdBy: req.user._id
        })
        res.send({
            success: 1,
            message: 'Successful.',
            data: newEmployee
        })
    } catch (error) {
        res.send({
            success: 0,
            message: error.message
        })
    }
}

module.exports = { createEmployee }
const EmployerSchema = require('../employer/Employer');
const CompanyModel = require('../company/Company');

const createEmployer = async(req, res, next) => {
    try {
        const existedCompany = await CompanyModel.findOne({ createdBy: req.user._id })
        if (!existedCompany) {
            res.send({ status: 404, success: 1, message: 'Company not found.' });
            return;
        }
        const {
            title,
            firstName,
            lastName
        } = req.body;
        const newInterviewer = await EmployerSchema.create({
            title,
            firstName,
            lastName,
            createdBy: req.user._id,
            company: existedCompany._id
        })
        res.send({
            message: 'Successful.',
            data: newInterviewer
        })
    } catch (error) {
        res.send({ status: 400, success: 0, message: error.message });
        return;
    }
}
module.exports = { createEmployer }
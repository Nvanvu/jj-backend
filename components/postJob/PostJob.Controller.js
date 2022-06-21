const PostJobModel = require('./PostJob');
const CompanyModel = require('../company/Company');

const postJob = async(req, res, next) => {
    try {
        const {
            jobType,
            vacancy,
            major,
            workContent,
            salary,
            workingTime,
            workPlace,
            qualification,
            workExperience,
            requirenment
        } = req.body;
        const existedCompany = await CompanyModel.findOne({ createdBy: req.user._id });
        if (!existedCompany) {
            res.send({ success: 1, message: 'Token incorrect. Post job faild.' });
            return;
        }
        const newJob = await PostJobModel.create({
            jobType,
            vacancy,
            major,
            workContent,
            salary,
            workingTime,
            workPlace,
            qualification,
            workExperience,
            requirenment,
            createdBy: req.user._id,
            company: existedCompany._id
        });
        res.send({ success: 1, data: newJob });
    } catch (error) {
        res.send({ status: 400, success: 0, message: error.message });
        return;
    }
}
const getJobs = async(req, res, next) => {
    try {

    } catch (error) {
        res.send({ success: 0, message: error.message });
        return;
    }
}


module.exports = { postJob }
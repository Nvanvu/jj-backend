const CompanyModel = require('../company/Company');
const createCompany = async(req, res, next) => {
    try {
        const {
            companyName,
            inauguration,
            representative,
            numberOfEmployee,
            headquarters,
            officePhoneNumber,
            businessActivities,
            charterCapital,
            website
        } = req.body;
        const existedCompanyName = await CompanyModel.findOne({ companyName });
        if (existedCompanyName) {
            res.send({ status: 400, success: 1, message: 'Company name duplicated.' });
            return;
        }
        const newCompany = await CompanyModel.create({
            companyName,
            inauguration,
            representative,
            numberOfEmployee,
            headquarters,
            officePhoneNumber,
            businessActivities,
            charterCapital,
            website,
            createdBy: req.user._id
        })
        res.send({
            message: 'Successful.',
            data: {
                newCompany
            }
        })
    } catch (error) {
        res.send({ status: 400, success: 0, message: error.message });
        return;
    }
}
const getCompanys = async(req, res, next) => {
    try {
        const companys = await CompanyModel.find();
        res.send({ success: 1, data: companys });
    } catch (error) {
        res.send({ status: 400, success: 0, message: error.message });
        return;
    }
}


module.exports = {
    createCompany,
    getCompanys
}
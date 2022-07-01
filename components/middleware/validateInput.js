const validateInput = (schema, property) => {
    return (req, res, next) => {
        const { error } = schema.validate(req[property]);
        const valid = error == null;
        if (valid) {
            next();
        } else {
            const { details } = error;
            const message = details.map(i => i.message).join(',');

            res.send({ status: 422, message: message });
            return;
        }
    }
}
module.exports = validateInput;
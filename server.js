require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const auth = require('./components/auth/Auth.Router');
const company = require('./components/company/Company.Router');
const employer = require('./components/employer/Employer.Router');
const employee = require('./components/employee/Employee.Router');
const uploadFile = require('./components/uploadFile/UploadFile.Router');
const postJob = require('./components/postJob/PostJob.Router');


const app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/v', auth);
app.use('/v', company);
app.use('/v', employer);
app.use('/v', employee);
app.use('/v', uploadFile);
app.use('/v', postJob);


mongoose.connect(process.env.mongoDB, err => {
    if (err) {
        return console.log('Err connect mongodb', err);
    }
    console.log('Connect mongoDB successful.');
})

app.listen(process.env.PORT || 8080, err => {
    if (err) {
        return console.log(err);
    }
    console.log(`Server started on PORT`, process.env.PORT);
})
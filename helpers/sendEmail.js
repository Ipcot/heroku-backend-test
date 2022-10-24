const sgMail = require("@sendgrid/mail");
require('dotenv').config();

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const email = {...data, from: "woully@gmail.com"};
        await sgMail.send(email);
        return true;
    } catch (error) {
        throw error;
    }
};

// const email = {
//   to: "y.pokhyl@e-on.ua",
//   from: "woully@gmail.com",
//   subject: "2-3 weeks max",
//   html: "Test grid mail",
// };

// sgMail.send(email)
// .then(() => console.log("email send success"))
// .catch(error => console.log(error.message));


// const nodemailer = require("nodemailer");
// const {META_PASSWORD} = process.env;

// const nodemailerConfig = {
//     host: "ipcotipcot@meta.ua",
//     port: "465", // 25, 465, 2255
//     secure: true,
//     auth: {
//         user: "",
//         pass: META_PASSWORD,
//     }
// };

// const transporter = nodemailer.createTransport(nodemailerConfig);

// const email = {
//   to: "y.pokhyl@e-on.ua",
//   from: "ipcotipcot@meta.ua",
//   subject: "2-3 weeks max",
//   html: "Test grid mail",
// };

// transporter.sendMail(email)
// .then(() => console.log("email send"))
// .catch(error => console.log(error.message));

module.exports = sendEmail;
const { RequestError, sendEmail } = require("../../helpers");
const {User} = require("../../models/user");

const {BASE_URL} = process.env;

const resendVerifyEmail = async(req, res) => {
    const {email} = req.body;
    const user = await User.findOne({email});
    if(!user) {
        throw RequestError(404, "Not found");
    }

    if(user.verify) {
        throw RequestError(400, "Verification has already been passed");
    };
    const mail = {
        to: email,
        subject: "Verify registration",
        html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}"> Press for confirm your email</a>`,
    };
    await sendEmail(mail);
    res.json({
        message: "Email verify resend"
    })
};


module.exports = resendVerifyEmail;
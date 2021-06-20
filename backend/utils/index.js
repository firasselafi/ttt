const accountSid = 'AC5bee201aacd665d437857f4803eb7f67';
const authToken = '003c95a0349d93d8a98cf1ada269c6ce';
const client = require('twilio')(accountSid, authToken);
const nodemailer = require('nodemailer');


const transport = nodemailer.createTransport({
    host: "smtp.outlook.io",
    port: 587,
    auth: {
      user: "medically-mls@outlook.com",
      pass: "Seafight100"
    }
});


const mailOptions = {
    from: 'medically-mls@outlook.com',
    subject: 'Hello'
};

async function sendSMS(message, phoneNumber) {
    return client.messages
        .create({
            body: message,
            from: '+18329816323',
            to: phoneNumber
        });
}


async function sendMail(to, message) {
    mailOptions.to = to;
    mailOptions.text = message;
    return transport.sendMail(mailOptions);
}


module.exports = {
    sendSMS,
    sendMail,
};
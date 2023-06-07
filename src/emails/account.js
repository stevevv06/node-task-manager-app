const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.FROM_EMAIL,
        subject: 'Your account has been created',
        text: `Welcome to the app ${name}`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.FROM_EMAIL,
        subject: 'Your account has been deleted',
        text: `Your account has been deleted ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}
const nodemailer = require("nodemailer");

const MailVerification = async (email, username, link) => {

    const MessageTemplate = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8f9fa; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td align="center" style="padding: 20px 0;">
                <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 24px; border: 1px solid #dee2e6; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
                    <tr>
                        <td align="center" style="padding: 40px 0; background-color: #0d6efd;">
                             <h1 style="color: #ffffff; margin: 0; font-size: 28px; letter-spacing: -0.5px;">MedTrack</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 40px 30px;">
                            <h2 style="color: #212529; margin-top: 0; font-size: 22px;">Welcome, ${username}!</h2>
                            <p style="color: #6c757d; font-size: 16px; line-height: 1.6;">
                                Thank you for joining MedTrack. We're excited to help you manage your health and medication reminders more effectively.
                            </p>
                            <p style="color: #6c757d; font-size: 16px; line-height: 1.6;">
                                To get started, please confirm your email address by clicking the button below.
                            </p>
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 30px;">
                                <tr>
                                    <td align="center">
                                        <a href="${link}" style="display: inline-block; padding: 16px 36px; background-color: #0d6efd; color: #ffffff; text-decoration: none; border-radius: 12px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 10px rgba(13, 110, 253, 0.3);">Verify Email Address</a>
                                    </td>
                                </tr>
                            </table>
                            <p style="color: #adb5bd; font-size: 14px; margin-top: 30px; text-align: center;">
                                If you didn't create an account with us, you can safely ignore this email.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 30px; background-color: #f8f9fa; text-align: center; color: #adb5bd; font-size: 12px; border-top: 1px solid #eee;">
                            <strong>MedTrack Health Systems</strong><br>
                            Lagos, Nigeria. &copy; 2026 All rights reserved.
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASS
        }
    });

    const mailOptions = {
        from: `"MedTrack Team" <${process.env.USER_EMAIL}>`, 
        to: email,
        subject: `Verify your MedTrack account, ${username}`,
        html: MessageTemplate
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("✅ Verification email sent to:", email);
        return true;
    } catch (error) {
        console.error("❌ Nodemailer Error:", error.message);
        return false;
    }
};

module.exports = MailVerification;
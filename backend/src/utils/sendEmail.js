import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Gmail ka App Password
  },
});

export const sendVerificationEmail = async (email, otp) => {
const mailOptions = {
        from: `"Trackflow" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Verify Your Email - OTP",
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                <h2>Email Verification</h2>
                <p>Thank you for signing up with Trackflow. Please use the One-Time Password (OTP) below to verify your email address:</p>
                <h1 style="color: #4CAF50; letter-spacing: 5px;">${otp}</h1>
                <p>This verification code is valid for <strong>10 minutes</strong>. Do not share this code with anyone.</p>
            </div>
        `,
    };
  // Email dispatch karna
  return await transporter.sendMail(mailOptions);
};
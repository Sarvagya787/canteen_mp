const nodemailer = require("nodemailer");
/**
 * 
 * @param {string} to - Recipient email address
 * @param {string} subject - Subject line of the email
 * @param {string} text - Plain text body
 * @param {string} [html] - Optional HTML body
 * @returns {Promise} - Resolves when email is sent
 */
async function sendEmail(to, subject, text, html = null) {
  try {
    // Create transporter (example: Gmail SMTP)

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, 
      auth: {
        user: process.env.EMAIL, 
        pass: process.env.PASSWORD  
      },
      connectionTimeout: 10000 
    });

    
    const mailOptions = {
      from:`"College MP" <example.multipurpose2000@gmail.com>`,
      to,
      subject,
      text,
      html
    };

    
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

module.exports = sendEmail;
'use server';
import nodemailer from 'nodemailer';
import emailTemplate from './emailTemplate'
export async function sendEmail(props){
  console.log(props);

    const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: 'wayforwardmailer@gmail.com',
      pass: 'iktdbqwdtwuaktyc'
    },
  });
  var maillist = [
    'dominic@wayforwardcommunity.org',
    'robby@wayforwardcommunity.org',
    'jim@wayforwardcommunity.org',
  ];
  
  const mailOptions = {
    from: "wayforwardmailer@gmail.com",
    to: maillist,
    subject: "Hello from Nodemailer",
    html: '<p>Name:'+ props.name + 
    '</p><br/><p>Email: '+ props.email +
    '</p><br/><p>Phone: '+ props.phone +
    '</p><br/><p>Message: '+ props.message
    
    ,
  };
  const info = await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });

}

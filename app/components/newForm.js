'use server';
import nodemailer from 'nodemailer';
export async function sendEmail(props){
  // console.log(props);

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
    'danidile94@gmail.com',
    'dominic@wayforwardcommunity.org',
    'robby@wayforwardcommunity.org',
    'jim@wayforwardcommunity.org',
  ];
  
  const mailOptions = {
    from: "wayforwardmailer@gmail.com",
    to: maillist,
    subject: "Message from WayForward WebSite",
    attachments: [{
      filename: 'Logo.png',
      path: 'https://wayforwardcommunity.org/images/WF-Logo.png',
      cid: 'logo' //my mistake was putting "cid:logo@cid" here! 
    }],
    html: `<html>
<head>
<meta name="viewport" content="width=device-width" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>
<body>
<table bgcolor="#fafafa" style=" width: 100%!important; height: 100%; background-color: #fafafa; padding: 20px 0px; font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, 'Lucida Grande', sans-serif;  font-size: 100%; line-height: 1.6;">
<tr>
<td></td>
<td bgcolor="#FFFFFF" style="border: 1px solid #eeeeee; background-color: #ffffff; border-radius:5px; display:block!important; max-width:600px!important; margin:0 auto!important; clear:both!important;"><div style="padding:20px 5px; max-width:600px; margin:0 auto; display:block;">
<table style="width: 100%;">
<tr>
<td><p style="text-align: center; display: block;  padding-bottom:20px;  margin-bottom:20px; border-bottom:1px solid #dddddd;">
      <img src="cid:logo" style="width: 100%; "/></p>
<h2 style="font-weight: 200; font-size: 16px; margin: 20px 0; color: #333333;"> <strong>You received a message from:</strong> ${props.name} </h2>
<h2 style="font-weight: 200; font-size: 16px; margin: 20px 0; color: #333333;"> <strong>Email:  </strong>${props.email} </h2>
<h2 style="font-weight: 200; font-size: 16px; margin: 20px 0; color: #333333;"> <strong>Phone:  </strong>${props.phone} </h2>
<h2 style="font-weight: 200; font-size: 16px; margin: 20px 0; color: #333333;"> <strong>Message: </strong>${props.message} </h2>
<p style="text-align: center; display: block; padding-top:20px;  margin-top:30px; color: #666666; border-top:1px solid #dddddd;">https://wayforwardcommunity.org/</p></td>
</tr>
</table>
</div></td>
<td></td>
</tr>
</table>
</body>
</html>`,
  };

  try{
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent Dani:', info.response);
    return {
      sent: "Your message has been sent successfully! We will get back to you shortly."
    }
  }catch (error) {
    console.error('Error sending email DAni:', error);
    return {
      error: "An error has occurred, and we haven't been able to send your email."
    }
  }
}

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
  }
});

var mailOptions = {
  from: 'digambark22@gmail.com',
  to: 'digambar.kadam@dailybooks.in,digambark22@gmail.com',
  subject: 'Sending Email using Node.js',
  //text: 'That was easy!'
  html: '<h1>Welcome</h1><p>Send FROM HTML!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
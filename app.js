var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rk1036291@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'rk1036291@gmail.com',
  to: 'roshankumarrk9570@gmail.com',
  subject: 'Sending Email using Node.js',
  text: `<p>Lorem ipsum dolor sit amet. Ut reprehenderit cupiditate quo dolores unde ab explicabo quos et internos aliquam id voluptate perspiciatis eum molestiae dolor eum quasi nihil. Eum voluptates temporibus qui aliquid magni nam nihil recusandae et vero possimus. </p><p>Aut repellat dolores sed repellendus ratione aut aperiam culpa ab suscipit quidem! Qui dolores praesentium ea dignissimos velit sit error quasi vel dolorem aliquam eum labore quia. </p><p>Qui nemo consequatur in quia reiciendis qui alias suscipit. Ex praesentium quibusdam vel culpa tempore rem modi repudiandae. Qui repudiandae animi id quam internos vel voluptatem enim sed enim libero et rerum nisi et sint voluptas ad dolorem similique. </p>
  .`        
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
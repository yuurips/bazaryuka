//const http = require('http');
const express = require('express');
const path = require('path'); //css
const bodyParser = require('body-parser');
const app = express();

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'static'))); //css
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', require('./routes/index'));

app.listen(port);


//const server = http.createServer(app);
//server.listen(5000);

















/*
var transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: 'bazar.yuka@hotmail.com',
        pass: 'Bazaryuka'
    }
});

const email = {
  from: 'sender@outlook.com',
  to: 'bazar.yuka@hotmail.com',
  subject: req.body.nome + req.body.telefone,
  text: req.body.mensagem,
  html: '<p>Email enviado com nodemailer</p>'

}

transporter.sendMail(email, (err, result)=>{
  if(err) return console.log(err)
  console.log("Mensagem enviada!!!! " + result)

});*/
const express = require('express');
const router = express.Router();


router.get('/', (req, resp) => {
    return resp.render('index');
});

router.post('/', (req, resp) => {
  var nome = req.body.nome;
  var telefone = req.body.telefone;
  var mensagem = req.body.mensagem;
  const nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'yuure.ps@gmail.com',
        pass: 'tonightwealldie@'
      }
    });
    var mailOptions = {
      from: 'yuure.ps@gmail.com',
      to: 'yuri.ps@live.com',
      subject: 'Nome: ' + nome + ' / Telefone: ' + telefone,
      text: mensagem
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
      return resp.render('index');
    });
});


module.exports = router;
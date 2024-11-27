const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');

// Rutas
const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);

// Enviar correo
app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'transportesutn@gmail.com',
      pass: 'transportes2024',
    },
  });

  const mailOptions = {
    from: email,
    to: 'transportesutn@gmail.com',
    subject: `Nuevo mensaje de ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error al enviar el correo');
    }
    res.status(200).send('Correo enviado');
  });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

const cors = require('cors');
app.use(cors());

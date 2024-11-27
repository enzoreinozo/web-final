const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "transportesutn@gmail.com",
      pass: "transportes2024",
    },
  });

  const mailOptions = {
    from: email,
    to: "transportesutn@gmail.com",
    subject: `Mensaje de ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Correo enviado exitosamente");
  } catch (error) {
    res.status(500).send("Error al enviar el correo");
  }
});

module.exports = router;
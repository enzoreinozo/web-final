const express = require('express');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 5000;

// Configuración de Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  // Asegúrate de ingresar tu contraseña aquí
    database: 'web_final'
});

// Página principal (Home)
app.get('/', (req, res) => {
    res.render('home');
});

// Ruta para enviar correos
app.post('/send-mail', async (req, res) => {
    const { name, email, message } = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tuemail@gmail.com', // Cambia por tu email
            pass: 'tucontraseña' // Cambia por tu contraseña
        }
    });

    try {
        await transporter.sendMail({
            from: email,
            to: 'destino@gmail.com', // Email al que se enviará
            subject: 'Mensaje desde el formulario',
            text: `De: ${name}\nCorreo: ${email}\nMensaje: ${message}`
        });
        res.send('Correo enviado correctamente');
    } catch (err) {
        res.status(500).send('Error al enviar el correo');
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

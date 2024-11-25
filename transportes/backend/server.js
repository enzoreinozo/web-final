const express = require('express');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path'); // Para servir archivos estáticos

const app = express();
const port = 3001;

// Configuración de Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',  // Cambia esto por tu contraseña de MAMP
    database: 'web_final'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database');
});

// Página principal (Home)
app.get('/', (req, res) => {
    res.render('home'); // Renderiza la vista 'home.handlebars'
});

// Ruta para el formulario de contacto
app.get('/contact', (req, res) => {
    res.render('contact'); // Renderiza la vista 'contact.handlebars'
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

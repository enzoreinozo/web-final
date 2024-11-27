const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const emailRoutes = require("./routes/email");
const recordsRoutes = require("./routes/records");
require('dotenv').config();
app.use(express.json());

// Importar rutas
const emailRoutes = require('./routes/email');

// Usar rutas
app.use('/api', emailRoutes);

// Resto de la configuración de tu servidor...



const app = express();
const PORT = 3001;

// Configuración de Handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "views");

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use("/api/send-email", emailroutes);
app.use("/api/records", recordsroutes);

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
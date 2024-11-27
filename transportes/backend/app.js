const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const emailRoutes = require("./routes/email");
const recordsRoutes = require("./routes/records");

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
app.use("/api/send-email", emailRoutes);
app.use("/api/records", recordsRoutes);

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
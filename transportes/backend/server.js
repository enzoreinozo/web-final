require('dotenv').config();
// Leer registros
app.get('/items', (req, res) => {
    const query = 'SELECT * FROM items'; // Cambia 'items' por tu tabla.
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al obtener los datos');
        }
        res.json(results);
    });
});

// Crear un registro
app.post('/items', (req, res) => {
    const { name, description } = req.body; // Ajusta según tus columnas.
    const query = 'INSERT INTO items (name, description) VALUES (?, ?)';
    db.query(query, [name, description], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al insertar datos');
        }
        res.status(201).send('Registro creado');
    });
});

// Actualizar un registro
app.put('/items/:id', (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body; // Ajusta según tus columnas.
    const query = 'UPDATE items SET name = ?, description = ? WHERE id = ?';
    db.query(query, [name, description, id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al actualizar datos');
        }
        res.send('Registro actualizado');
    });
});

// Eliminar un registro
app.delete('/items/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM items WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al eliminar datos');
        }
        res.send('Registro eliminado');
    });
});

require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Crear un registro
app.post('/api/records', (req, res) => {
    const { nombre, descripcion } = req.body;
    db.query('INSERT INTO registros (nombre, descripcion) VALUES (?, ?)', [nombre, descripcion], (err, results) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ id: results.insertId, nombre, descripcion });
    });
  });
  
  // Leer registros
  app.get('/api/records', (req, res) => {
    db.query('SELECT * FROM registros', (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results);
    });
  });
  
  // Actualizar un registro
  app.put('/api/records/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    db.query(
      'UPDATE registros SET nombre = ?, descripcion = ? WHERE id = ?',
      [nombre, descripcion, id],
      (err, results) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Registro actualizado' });
      }
    );
  });
  
  // Eliminar un registro
  app.delete('/api/records/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM registros WHERE id = ?', [id], (err, results) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Registro eliminado' });
    });
  });
  
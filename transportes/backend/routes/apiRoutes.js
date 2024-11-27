const express = require('express');
const db = require('../db');
const router = express.Router();

// Leer registros
router.get('/records', (req, res) => {
  db.query('SELECT * FROM records', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Agregar registro
router.post('/records', (req, res) => {
  const { name, description } = req.body;
  db.query('INSERT INTO records (name, description) VALUES (?, ?)', [name, description], (err, result) => {
    if (err) throw err;
    res.status(201).json(result);
  });
});

// Actualizar registro
router.put('/records/:id', (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  db.query('UPDATE records SET name = ?, description = ? WHERE id = ?', [name, description, id], (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});

// Eliminar registro
router.delete('/records/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM records WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});

module.exports = router;

// models/user.js
const db = require('../config/db');

const getAllMessages = (callback) => {
    db.query('SELECT * FROM messages ORDER BY created_at DESC', (err, results) => {
        if (err) throw err;
        callback(results);
    });
};

const createMessage = (name, email, message, callback) => {
    db.query(
        'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)',
        [name, email, message],
        (err, results) => {
            if (err) throw err;
            callback(results);
        }
    );
};

module.exports = {
    getAllMessages,
    createMessage,
};

import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    })
      .then(() => alert("Correo enviado correctamente"))
      .catch(() => alert("Error al enviar el correo"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
};


const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Todos los campos son obligatorios.");
      return;
    }
  
    fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    })
      .then((response) => response.json())
      .then((data) => alert('Correo enviado correctamente'))
      .catch((error) => alert('Error al enviar el correo'));
  };
  

export default ContactoPage;

import '../styles/components/pages/contacto.Page.css'

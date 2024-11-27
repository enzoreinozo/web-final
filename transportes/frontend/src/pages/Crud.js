// src/pages/Crud.js
import React, { useEffect, useState } from "react";

const Crud = () => {
  const [records, setRecords] = useState([]);
  const [newRecord, setNewRecord] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/records")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((error) => console.error("Error al cargar los datos", error));
  }, []);

  const handleAddRecord = () => {
    fetch("http://localhost:3001/api/records", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newRecord }),
    })
      .then((response) => response.json())
      .then((data) => setRecords([...records, data]))
      .catch((error) => console.error("Error al agregar el registro", error));
  };

  const handleDeleteRecord = (id) => {
    fetch(`http://localhost:3001/api/records/${id}`, { method: "DELETE" })
      .then(() => setRecords(records.filter((record) => record.id !== id)))
      .catch((error) => console.error("Error al eliminar el registro", error));
  };

  return (
    <div>
      <h1>Gestión de Registros</h1>
      <input
        type="text"
        value={newRecord}
        onChange={(e) => setNewRecord(e.target.value)}
      />
      <button onClick={handleAddRecord}>Agregar Registro</button>
      <ul>
        {records.map((record) => (
          <li key={record.id}>
            {record.name}{" "}
            <button onClick={() => handleDeleteRecord(record.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crud;

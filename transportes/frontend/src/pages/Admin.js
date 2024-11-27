import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [records, setRecords] = useState([]);
  
  useEffect(() => {
    fetch('/api/records')
      .then(res => res.json())
      .then(data => setRecords(data));
  }, []);

  return (
    <div>
      <h1>Panel de Administración</h1>
      <ul>
        {records.map(record => (
          <li key={record.id}>{record.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;

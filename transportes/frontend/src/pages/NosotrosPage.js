import React from "react";
import '../styles/components/pages/NosotrosPage.css';

const Persona = ({ nombre, cargo, imagen, descripcion }) => (
  <div className="persona">
    <img src={imagen} alt={nombre} />
    <h5>{nombre}</h5>
    <h6>{cargo}</h6>
    <p>{descripcion}</p>
  </div>
);

const NosotrosPage = () => {
  const personas = [
    {
      nombre: "Elsa Gomez",
      cargo: "Gerente General",
      imagen: "/img/nosotros/nosotros1.jpg",
      descripcion: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Est voluptas officiis assumenda accusamus optio autem sed."
    },
    {
      nombre: "Fede Gomez",
      cargo: "Gerente logistica",
      imagen: "/img/elsa.jpg",
      descripcion: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Est voluptas officiis assumenda accusamus optio autem sed."
    },
    {
      nombre: "Guzman Gomez",
      cargo: "Gerente Comercial",
      imagen: "/img/guzman.jpg",
      descripcion: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Est voluptas officiis assumenda accusamus optio autem sed."
    },
    {
      nombre: "Laura Gomez",
      cargo: "Gerente de Sistemas",
      imagen: "/img/laura.jpg",
      descripcion: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Est voluptas officiis assumenda accusamus optio autem sed."
    },
    {
      nombre: "Samu Gomez",
      cargo: "Gerente de Marketing",
      imagen: "/img/samu.jpg",
      descripcion: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Est voluptas officiis assumenda accusamus optio autem sed."
    }
  ];

  return (
    <main className="holder">
      <div className="historia">
        <h2>Historia</h2>
        <p>
          lorem ipsum dolor sit amet, consectetur adipisicing elit. Est voluptas officiis assumenda accusamus optio autem sed.
        </p>
        <p>
          lorem ipsum dolor sit amet, consectetur adipisicing elit. Est voluptas officiis assumenda accusamus optio autem sed.
        </p>
      </div>

      <div className="staff">
        <h2>Staff</h2>
        <div className="personas">
          {personas.map((persona, index) => (
            <Persona
              key={index}
              nombre={persona.nombre}
              cargo={persona.cargo}
              imagen={persona.imagen}
              descripcion={persona.descripcion}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default NosotrosPage;
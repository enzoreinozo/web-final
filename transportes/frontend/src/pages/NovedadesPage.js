import React from "react";
import '../styles/components/pages/Novedades.css';

const NovedadesPages = (props) => {
  return (
    <section className="holder">
      <h1>Novedades</h1>  {/* Asegúrate de que solo haya un <h1> por página */}
      <div className="novedades">
        <h2>Título de la Novedad</h2>  {/* Subtítulo de la novedad */}
        <h3>Subtítulo adicional</h3>  {/* Podría ser un subtítulo de nivel 3 */}
        <p>Descripción de la novedad o el cuerpo del artículo. Aquí puedes detallar más información sobre la novedad que se está presentando.</p>
      </div>
    </section>
  );
}

export default NovedadesPages;
import React, { useState, useEffect } from 'react';

const URL = "https://localhost:44375";

const OrdenesProduccionComponent = () => {
  const [ordenesTrabajoProduccion, setOrdenesTrabajoProduccion] = useState([]);
  const [ordenProduccion, setOrdenProduccion] = useState(null);

  useEffect(() => {
    const fetchOrdenesTrabajoProduccion = async () => {
      try {
        const response = await fetch(`${URL}/api/app/orden-produccion/ordenes-trabajo-produccion`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors',
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setOrdenesTrabajoProduccion(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchOrdenesTrabajoProduccion();
  }, []);

  const fetchOrdenProduccion = async (id) => {
    try {
      const response = await fetch(`${URL}/api/app/orden-produccion/${id}/orden-produccion`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setOrdenProduccion(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Puedes renderizar los datos o hacer cualquier otra cosa con ellos
  return (
    <div>
      <h2>Ordenes de Trabajo de Producción</h2>
      <ul>
        {ordenesTrabajoProduccion.map((orden) => (
          <li key={orden.id} onClick={() => fetchOrdenProduccion(orden.id)}>
            {orden.descripcion}
          </li>
        ))}
      </ul>

      {ordenProduccion && (
        <div>
          <h3>Detalles de la Orden de Producción Seleccionada:</h3>
          <p>ID: {ordenProduccion.id}</p>
          <p>Descripción: {ordenProduccion.descripcion}</p>
          {/* Agrega más detalles según la estructura de tus datos */}
        </div>
      )}
    </div>
  );
};

export default OrdenesProduccionComponent;

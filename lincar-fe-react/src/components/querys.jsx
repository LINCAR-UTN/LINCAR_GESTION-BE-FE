import React, { useEffect } from 'react';

const URL = "https://localhost:44375";

const AutopartesComponent = () => {
  useEffect(() => {
    const getAutopartes = async () => {
      try {
        const response = await fetch(`${URL}/api/app/autoparte/autopartes`, {
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
        console.log("Autopartes obtenidas:", data);
      } catch (error) {
        console.error('Error al obtener autopartes:', error);
      }
    };

    getAutopartes();
  }, []);

  return (
    <div>
      <h2>Componente de Autopartes</h2>
      {/* Puedes agregar JSX para mostrar los datos si es necesario */}
    </div>
  );
};

export default AutopartesComponent;

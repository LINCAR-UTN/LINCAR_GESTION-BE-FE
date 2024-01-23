import React, { useEffect, useState } from 'react';
import {getAutopartes} from '../querys.jsx';
import AutopartesListado from './ListadoAutopartes.jsx';

function Autopartes() {
  const [autopartes, setAutopartes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const autopartesData = await getAutopartes();
        setAutopartes(autopartesData);
        console.log(autopartesData)
      } catch (error) {
        console.error('Error al obtener autopartes:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Autopartes</h2>
      <p>Autopartes works</p>
      <AutopartesListado autopartes={autopartes} />
    </div>
  );
}

export default Autopartes;

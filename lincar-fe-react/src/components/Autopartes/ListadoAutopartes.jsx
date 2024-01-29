import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { getAtributosByAutoparteId } from '../Queries.jsx';

const AutopartesListado = ({ autopartes }) => {
  const [activeKey, setActiveKey] = useState(null);
  const [atributos, setAtributos] = useState([]);

  const handleAccordionChange = async (newActiveKey) => {
    try {
      if (newActiveKey !== activeKey && newActiveKey !== null) {  // Verifica si el acordeón se está abriendo y no es null
        const atributosData = await getAtributosByAutoparteId(newActiveKey);
    
        setAtributos(atributosData);
 
      }
    } catch (error) {
      console.error('Error al obtener atributos:', error);
    }

   
    setActiveKey(newActiveKey);
  };

  return (
    <div className='container'>
      <h2 className='text-center'>Listado de Autopartes</h2>

      <Accordion
        defaultActiveKey={activeKey}  // cambiar esto si quieres que algún elemento esté abierto por defecto
        onSelect={(key) => handleAccordionChange(key)}
      //asigna la key (igual al id de la autoparte) un numero, y lo setea en el useState (por defecto null). Usa este valor de entrada para saber 
      //1. si el item esta abierto o cerrado, 2. para con el key hacer la consulta y traer los atributos de la autoparte correspondiente
      >
        {autopartes.map((autoparte) => (
          <Accordion.Item key={autoparte.id} eventKey={autoparte.id}>
            <Accordion.Header>{autoparte.nombre}</Accordion.Header>
            <Accordion.Body>
              {/* Contenido del cuerpo del acordeón */}
              {atributos.map((atributo) => (
                <div key={atributo.id}>
                  {atributo.nombre}: {atributo.valor}
                </div>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default AutopartesListado;

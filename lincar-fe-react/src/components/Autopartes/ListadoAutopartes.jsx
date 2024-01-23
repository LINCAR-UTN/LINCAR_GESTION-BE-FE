import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


const AutopartesListado = ({ autopartes }) => {
  return (
    <div className='container'>
      <h2 className='text-center'>Listado de Autopartes</h2>

      <Accordion defaultActiveKey={['0']} alwaysOpen>

        {autopartes.map((autoparte) => (
          <Accordion.Item eventKey={autoparte.id}>
            <Accordion.Header>{autoparte.nombre}</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        ))}




      </Accordion>



    </div>
  );
};

export default AutopartesListado;

import React from 'react';

const AutopartesListado = ({ autopartes }) => {
  return (
    <div className='container'>
      <h2 className='text-center'>Listado de Autopartes</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Activa</th>
            {/* Agrega más encabezados según la estructura de tus datos */}
          </tr>
        </thead>
        <tbody>
          {autopartes.map((autoparte) => (
            <tr key={autoparte.id}>
              <td>{autoparte.id}</td>
              <td>{autoparte.nombre}</td>
              <td>{autoparte.activa ? 'Sí' : 'No'}</td>
              {/* Agrega más celdas según la estructura de tus datos */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AutopartesListado;

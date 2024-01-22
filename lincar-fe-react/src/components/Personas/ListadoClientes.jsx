import React from 'react';

const ListadoClientes = ({ clientes }) => {
  return (
    <div className='container'>
      <br />
      <h2 className='text-center'>Listado de Clientes</h2>
      <br />
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            {/* Agrega más encabezados según la estructura de tus datos */}
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.apellido}</td>
              {/* Agrega más celdas según la estructura de tus datos */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoClientes;

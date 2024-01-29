import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import {postCliente} from '../Queries.jsx'
import { notificarSuccess, notificarError } from '../Notificaciones.jsx';

const AgregarCliente = () => {
  const styles = {
    padding: '20px',
  };

  const [cliente, setCliente] = useState({
    id: null,
    nombre: '',
    apellido: '',
    numeroTelefono: '',
    dni: 0,
    direccion: '',
    fechaHoraAlta: new Date().toISOString(),
    fechaHoraModificado: new Date().toISOString(),
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    // const parsedValue = name === 'dni' ? parseInt(value, 10) : value;
  
    setCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    setCliente((prevCliente) => ({
      ...prevCliente,
      dni: parseInt(prevCliente.dni, 10),
    }));
  
    
    try {
      await postCliente(cliente);
      notificarSuccess("Cliente");
    } catch (error) {
      notificarError(error);
    }
  };

  return (
    <Container style={styles}>
    <div>
      <h2>Agregar Cliente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="form-control"
            value={cliente.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            className="form-control"
            value={cliente.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div>
        <label htmlFor="numeroTelefono">Número de Teléfono:</label>
          <input
            type="text"
            id="numeroTelefono"
            name="numeroTelefono"
            className="form-control"
            value={cliente.numeroTelefono}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="dni">DNI:</label>
          <input
            type="number"
            id="dni"
            name="dni"
            className="form-control"
            value={cliente.dni}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="direccion">Dirección:</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            className="form-control"
            value={cliente.direccion}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
    </Container>
  );
};

export default AgregarCliente;

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import {postEmpleado} from '../Queries.jsx'
import { notificarError, notificarSuccess } from '../Notificaciones.jsx';

const AgregarEmpleado = () => {
  const styles = {
    padding: '20px',
  };

  const [empleado, setEmpleado] = useState({
    id: null,
    nombre: '',
    apellido: '',
    numeroTelefono: '',
    dni: 0,
    fechaHoraAlta: new Date().toISOString(),
    fechaHoraModificado: new Date().toISOString(),
    activo:true,
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setEmpleado((prevEmpleado) => ({
      ...prevEmpleado,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setEmpleado((prevEmpleado) => ({
      ...prevEmpleado,
      dni: parseInt(prevEmpleado.dni, 10),
    }));
  
    
    try {
      await postEmpleado(empleado);
      notificarSuccess("Empleado")
    } catch (error) {
      notificarError(error);
    }
  };

  return (
    <Container style={styles}>
    <div>
      <h2>Agregar Empleado</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="form-control"
            value={empleado.nombre}
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
            value={empleado.apellido}
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
            value={empleado.numeroTelefono}
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
            value={empleado.dni}
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

export default AgregarEmpleado;
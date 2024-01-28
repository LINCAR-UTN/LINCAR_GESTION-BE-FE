
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import {postEmpleado} from '../querys.jsx'

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
    fechaHoraAlta: '',
    fechaHoraModificado: '',
    activo:true,
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    const fechaActual = new Date().toISOString();
    const parsedValue = name === 'dni' ? parseInt(value, 10) : value;
  
    setEmpleado((prevEmpleado) => ({
      ...prevEmpleado,
      [name]: parsedValue,
      fechaHoraAlta: prevEmpleado.fechaHoraAlta || fechaActual,
      fechaHoraModificado: fechaActual,
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
    } catch (error) {
      console.error('Error al enviar el cliente:', error);
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
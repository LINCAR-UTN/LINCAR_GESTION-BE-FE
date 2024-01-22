import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';


const AgregarCliente = () => {
    const styles = {
        padding: '20px',
      };

  const [cliente, setCliente] = useState({
    nombre: '',
    apellido: '',
    numeroTelefono: '',
    dni: '',
    direccion: '',
    fechaHoraAlta: '',//ver como lo resolvemos [tal vez lo hace el back y no tenemos ni que pasarlo]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del cliente, como enviarlos a un servidor o realizar validaciones.
    console.log('Cliente:', cliente);
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
          <label htmlFor="telefono">Número de Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            className="form-control"
            value={cliente.numeroTelefono}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="dni">DNI:</label>
          <input
            type="text"
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
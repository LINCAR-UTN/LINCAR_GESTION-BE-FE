import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { postAutoparte, getSectoresProduccion, getModelosProducto } from '../querys';

const AgregarCliente = () => {
  const [autoparte, setAutoparte] = useState({
    id: null,
    codAutoparte: null,
    nombre: '',
    activa: true,
    observaciones: [],
    sectoresProduccionIds: '',
    modelosProduccionIds: '',
  });

  const [sectoresProduccion, setSectoresProduccion] = useState([]);
  const [modelosProducto, setModelosProducto] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAutoparte((prevAutoparte) => ({
      ...prevAutoparte,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await postAutoparte(autoparte);
      console.log('enviado', { autoparte });
    } catch (error) {
      console.error('Error al enviar el cliente:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sectoresData = await getSectoresProduccion();
        setSectoresProduccion(sectoresData);
  
        const modelosData = await getModelosProducto();
        setModelosProducto(modelosData);
  
        console.log('sectoresProduccion', sectoresData);
        console.log('modelosProducto', modelosData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">NOMBRE AUTOPARTE</InputGroup.Text>
          <Form.Control
            placeholder="Nombre autoparte"
            aria-label="nombreAutoparte"
            aria-describedby="basic-addon1"
            name="nombre"
            value={autoparte.nombre}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <div className="d-flex flex-column">
          {sectoresProduccion.map((sector) => (
            <InputGroup key={sector.id} className="mb-3">
              <InputGroup.Checkbox aria-label={`Checkbox for ${sector.nombre}`} />
              <Form.Control
                placeholder={sector.nombre}
                aria-label="Text input with checkbox"
                disabled // Assuming you want these inputs to be disabled
              />
            </InputGroup>
          ))}
        </div>




        <div className="d-flex flex-column">
  { modelosProducto.map((modelo) => (
    <InputGroup key={modelo.id} className="mb-3">
      <InputGroup.Checkbox aria-label={`Checkbox for ${modelo.codigoModelo}`} />
      <Form.Control
        placeholder={modelo.codigoModelo}
        aria-label="Text input with checkbox"
        disabled // Assuming you want these inputs to be disabled
      />
    </InputGroup>
  ))}
</div>


        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </Form>
    </div>
  );
};

export default AgregarCliente;
const URL = "https://localhost:44375";

  // ------------------------- CLIENTES  ------------------------------
const postCliente = async (cliente) => {
    try {
      const response = await fetch(`${URL}/api/app/cliente/update-cliente`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(cliente)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener clientes:', error);
      throw error;
    }
  };

  const getClientes = async () => {
    try {
      const response = await fetch(`${URL}/api/app/cliente/clientes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
      
    } catch (error) {
      console.error('Error al obtener clientes:', error);
      throw error;
    }
  };

  // ------------------------- SectoresProduccion  ------------------------------
  const getSectoresProduccion = async () => {
    try {
      const response = await fetch(`${URL}/api/app/sector-produccion/sectores-produccion`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
      
    } catch (error) {
      console.error('Error al obtener clientes:', error);
      throw error;
    }
  };


  // ------------------------- EMPLEADOS  ------------------------------
  const getEmpleados = async () => {
    try {
      const response = await fetch(`${URL}/api/app/empleado/empleados`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
      
    } catch (error) {
      console.error('Error al obtener clientes:', error);
      throw error;
    }
  };

  const postEmpleado = async (empleado) => {
    try {
      const response = await fetch(`${URL}/api/app/empleado/update-empleado`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(empleado)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  // ------------------------- AUTOPARTES  ------------------------------

  const getAutopartes = async () => {
    try {
      const response = await fetch(`${URL}/api/app/autoparte/autopartes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener autopartes:', error);
      throw error;
    }
  };


  
  const postAutoparte = async (autoparte) => {
    try {
      const response = await fetch(`${URL}/api/app/autoparte/update-autoparte`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(autoparte)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener clientes:', error);
      throw error;
    }
  };


  getClientes()

  // ------------------------- Atributos  ------------------------------
  const getAtributosByAutoparteId = async (idAutoparte) => {
    try {
      const response = await fetch(`${URL}/api/app/atributo/atributos-by-autoparte-id/${idAutoparte}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener autopartes:', error);
      throw error;
    }
  };


  const postAtributo = async (atributo) => {
    try {
      const response = await fetch(`${URL}/api/app/atributo/update-atributo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(atributo)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener clientes:', error);
      throw error;
    }
  };
  // ------------------------- MODELOS PRODUCTO  ------------------------------

  const getModelosProducto = () =>{
      let query = `${URL}/api/app/modelo-producto/modelos-producto`
       fetch(query, {
           method: 'GET',
            headers: {
              'Content-Type': 'application/json', 
          
           },
           mode: 'cors',
           // body: JSON.stringify(modeloProducto) // body para el post
         })
          .then(response => {
           if (!response.ok) {
             throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            // Manejo de la respuesta
            console.log(data);
          })
          .catch(error => {
            // Manejo Errores
            console.error('Error:', error);
          });}

export {postCliente, getClientes, getEmpleados, postEmpleado, getAutopartes, 
  getAtributosByAutoparteId , postAutoparte,  postAtributo,getSectoresProduccion,
  getModelosProducto}
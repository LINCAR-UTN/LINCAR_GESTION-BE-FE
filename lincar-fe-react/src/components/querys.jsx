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

  getClientes()

export {postCliente, getClientes, getEmpleados, getAutopartes}
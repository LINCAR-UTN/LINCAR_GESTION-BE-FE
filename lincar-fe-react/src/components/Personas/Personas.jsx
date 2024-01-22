import React, { useEffect, useState } from 'react';
import {getClientes, getEmpleados} from '../querys.jsx';
import ListadoClientes from './ListadoClientes.jsx';
import ListadoEmpleados from './ListadoEmpleados.jsx';

function Personas(){
    const [clientes, setClientes] = useState([]);
    const [empleados, setEmpleados] = useState([]);
    const [mostrarListadoClientes, setMostrarListadoClientes] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const clientesData = await getClientes();
          setClientes(clientesData);

          const empleadosData = await getEmpleados();
          setEmpleados(empleadosData);
          
        } catch (error) {
          console.error('Error al obtener clientes:', error);
        }
      };

      
      fetchData();
    }, []);
  
    const toggleListado = () => {
      setMostrarListadoClientes(!mostrarListadoClientes);
    };
  
    return (
      <div className="text-center">
        <p></p>
        <h2>{mostrarListadoClientes ? 'Clientes' : 'Empleados'}</h2>
        <button className = "btn btn-primary" onClick={toggleListado}>Cambiar Listado</button>
        {mostrarListadoClientes ? (
          <ListadoClientes clientes={clientes} />
        ) : (
          <ListadoEmpleados empleados={empleados} />
        )}
        
      </div>
    );
  }

export default Personas;
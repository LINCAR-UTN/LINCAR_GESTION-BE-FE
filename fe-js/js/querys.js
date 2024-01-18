


let URL = "https://localhost:44375"


// ----------------------------------Autopartes----------------------------------
let autoparte = {
    id: null,
    codAutoparte: null,
    nombre: "string",
    activa: true,
    observaciones: [{
        id: 0,
        texto: "string"
      }],
    sectoresProduccionIds: [null],
    modelosProduccionIds: [null],
    atributos: [{
        id: null,
        nombre: "string",
        valor: "string",
        autoparte: {
          id: null,
          codAutoparte: null,
          nombre: "string",
          activa: true,
          observaciones: [
            {
              id: null,
              texto: "string"
            }
          ],
          sectoresProduccionIds: [
            null
          ],
          modelosProduccionIds: [
            null
          ],
          atributos: [
            "string"
          ]}}]}

// no funciona
export const postAutoparte = (autoparte) =>{
  let query = `${URL}/api/app/autoparte/update-autoparte`
    fetch(query, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
      
        },
        mode: 'cors',
        body: JSON.stringify(autoparte) // body para el post
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
      });
}

export const getAutopartes = () =>{
  let query = `${URL}/api/app/autoparte/autopartes`
    fetch(query, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', 
      
        },
        mode: 'cors',
        // body: JSON.stringify(autoparte) // body para el post
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
      });
}

// ----------------------------------Clientes----------------------------------

let cliente = {
  id: null,
  nombre: "string",
  apellido: "string",
  numeroTelefono: "string",
  dni: 44821152,
  fechaHoraAlta: "2024-01-18T02:02:16.818Z",
  fechaHoraModificado: "2024-01-18T02:02:16.818Z",
  direccion: "string"
}

export const postCliente = (cliente) =>{
  let query = `${URL}/api/app/cliente/update-cliente`
    fetch(query, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
      
        },
        mode: 'cors',
        body: JSON.stringify(cliente) // body para el post
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
      });
}

// ----------------------------------Empleados----------------------------------

let empleado = {
  id: null,
  nombre: "string",
  apellido: "string",
  numeroTelefono: "string",
  dni: 44821152,
  fechaHoraAlta: "2024-01-18T02:03:06.558Z",
  fechaHoraModificado: "2024-01-18T02:03:06.558Z",
  activo: true
}

export const postEmpleado = (empleado) =>{
  let query = `${URL}/api/app/empleado/update-empleado`
    fetch(query, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
      
        },
        mode: 'cors',
        body: JSON.stringify(empleado) // body para el post
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
      });
}

// ----------------------------------Modelo Productos----------------------------------

let modeloProducto = 
{
    id: null,
    codigoModelo: "PRUEBA MODELO POST JS",
    largoTotalMts: 0,
    largoUtilMts: 0,
    altoTotalMts: 0,
    altoUtilMts: 0,
    anchoTotalMts: 0,
    anchoUtilMts: 0,
    espesorPisoMms: 0,
    tipoUnidad: "string",
    tipoPiso: "string",
    colorZocalo: "string",
    colorInferior: "string",
    puertaLateral: "string",
    puertaTrasera: "string",
    malacates:  0,
    arcos: 0,
    escalera: "string",
    boquillas: 0,
    portaEstacas: 0,
    voltaje: 0
  }


export const postModeloProducto = (modelo) =>{
  let query = `${URL}/api/app/modelo-producto/update-modelo-producto`
    fetch(query, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
      
        },
        mode: 'cors',
        body: JSON.stringify(modelo) // body para el post
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
      });
}

export const getModelosProducto = () =>{
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
      });
}

// ----------------------------------Ordenes Trabajo de Produccion----------------------------------
export const getOrdenesTrabajoProduccion = () =>{
  let query = `${URL}/api/app/orden-produccion/ordenes-trabajo-produccion`
    fetch(query, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', 
      
        },
        mode: 'cors',
        // body: JSON.stringify(ordenesTrabajoProduccion) // body para el post
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
      });
}

export const getOrdenProduccion = (id) =>{
  let query = `${URL}/api/app/orden-produccion/${id}/orden-produccion`
    fetch(query, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', 
      
        },
        mode: 'cors',
        // body: JSON.stringify(ordenProduccion) // body para el post
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
      });
}

let ordenTrabajo = {
  id: null,
  nroOrden: 0,
  fechaEmision: "2024-01-18T02:09:17.446Z",
  fechaEntrega: "2024-01-18T02:09:17.446Z",
  fechaEntregaEfectiva: "2024-01-18T02:09:17.446Z",
  descripcionCamion: "string",
  centroRuedaCamion: 0,
  modeloCamion: "string",
  cajaVelocidadCamion: "string",
  anchoChasisCamion: 0,
  dominioCamion: "string",
  colorCamion: "string",
  largoChasisCamion: 0,
  largoTotalMts: 0,
  largoUtilMts: 0,
  altoTotalMts: 0,
  altoUtilMts: 0,
  anchoTotalMts: 0,
  anchoUtilMts: 0,
  espesorPisoMms: 0,
  tipoUnidad: "string",
  tipoPiso: "string",
  colorZocalo: "string",
  colorInferior: "string",
  puertaLateral: "string",
  puertaTrasera: "string",
  malacates: 0,
  arcos: 0,
  escalera: "string",
  boquillas: 0,
  portaEstacas: 0,
  voltaje: 0,
  clienteId: 0,
  modeloProductoId: 0
}

export const postOrdenTrabajo = (ordenTrabajo) =>{
  let query = `${URL}/api/app/orden-produccion/update-orden-produccion`
    fetch(query, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
      
        },
        mode: 'cors',
        body: JSON.stringify(ordenTrabajo) // body para el post
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
      });
}

// postAutoparte(autoparte) // No funciona
// getAutopartes() // Funciona
// postCliente(cliente) // Funciona
// postEmpleado(empleado) // Funciona
// postModeloProducto(modeloProducto) // Funciona
// getModelosProducto() // Funciona



// ----------------------------------Sectores de produccion----------------------------------


export const getSectoresProduccion = () =>{
  let query = `${URL}/api/app/sector-produccion/sectores-produccion`
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
      });
}


let sectorProduccion = 
{
  id: null,
  nroSector: 1,
  nombre: "pruebaAltaSector",
  descripcion: "prueba",
  encargadoId: 0
}


export const postSectorProduccion = (sectorProduccion) =>{
  let query = `${URL}/api/app/sector-produccion/update-sector-produccion`
    fetch(query, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
      
        },
        mode: 'cors',
        body: JSON.stringify(sectorProduccion) // body para el post
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
      });
}




//FUNCIONAN
//postSectorProduccion(sectorProduccion); 
//getSectoresProduccion();



// ----------------------------------Ordenes Trabajo Autoparte----------------------------------

export const getOrdenesAutoparte = () =>{
  let query = `${URL}/api/app/orden-trabajo-autoparte/ordenes-trabajo-autoparte`
    fetch(query, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', 
      
        },
        mode: 'cors',
        // body: JSON.stringify(ordenesTrabajoProduccion) // body para el post
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
      });
}

export const getOrdenAutoparte = (id) =>{
  let query = `${URL}/api/app/orden-trabajo-autoparte/${id}/orden-trabajo-autoparte`
    fetch(query, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', 
      
        },
        mode: 'cors',
        // body: JSON.stringify(ordenProduccion) // body para el post
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
      });
}

let ordenAutoparte = {
  id: null,
  nroOrden: 0,
  fechaHoraCreada: "2024-01-18T13:56:12.878Z",
  cantidad: 0,
  ordenProduccionId: 0,
  empleadoId: 1,
  solicitanteId: 1,
  autoparteId: 1
}

export const postOrdenAutoparte = (ordenAutoparte) =>{
  let query = `${URL}/api/app/orden-trabajo-autoparte/update-orden-trabajo-autoparte`
    fetch(query, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
      
        },
        mode: 'cors',
        body: JSON.stringify(ordenAutoparte) // body para el post
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
      });
}

export const getOrdenesAutopartesPorEmpleado =  (idEmpleado) => {

  let query = `${URL}/api/app/orden-trabajo-autoparte/ordenes-trabajo-autoparte-asignadas-aUn-empleado/${idEmpleado}`
  fetch(query, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', 
    
      },
      mode: 'cors',
    //  body: JSON.stringify() // body para el post
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
    });
}

//postOrdenAutoparte(ordenAutoparte);
//getOrdenesAutoparte();
//getOrdenAutoparte(1);
//getOrdenesAutopartesPorEmpleado(1); 


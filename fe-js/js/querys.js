


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

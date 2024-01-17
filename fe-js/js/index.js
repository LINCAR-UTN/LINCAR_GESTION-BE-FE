
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
    fetch('https://localhost:44375/api/app/modelo-producto/update-modelo-producto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Agregar el encabezado Content-Type
      
        },
        mode: 'cors',
        body: JSON.stringify(modelo), // Aquí debes incluir el cuerpo de la solicitud en formato JSON
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error! Status: ${response.status}");
        }
        return response.json();
      })
      .then(data => {
        // Manejar la respuesta de la API aquí
        console.log(data);
      })
      .catch(error => {
        // Manejar errores aquí
        console.error('Error:', error);
      });
}

postModeloProducto(modeloProducto)

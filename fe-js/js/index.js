import { getSectoresProduccion } from './querys.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    let sectoresDB = await getSectoresProduccion();
    let sectores = document.getElementById('exampleSelect1');

    sectoresDB.forEach(sector => {
      let option = document.createElement('option');
      option.innerText = sector.nombre;
      sectores.appendChild(option);
    });

    console.log(sectoresDB);
  } catch (error) {
    console.error('Error al obtener sectores:', error);
  }
});





export function agregarAtributo() {
    const nombreAtributo = document.getElementById('nombreAtributo').value;
    const valorAtributo = document.getElementById('valorAtributo').value;

    // Validar que se haya ingresado un nombre de atributo
    if (nombreAtributo.trim() === '') {
        alert('Ingrese un nombre de atributo.');
        return;
    }

    // Crear elemento de lista y agregarlo a la lista
    const listaAtributos = document.getElementById('listaAtributos');
    const nuevoAtributo = document.createElement('li');
    nuevoAtributo.textContent = `${nombreAtributo}: ${valorAtributo}`;
    listaAtributos.appendChild(nuevoAtributo);

    // Limpiar campos de entrada
    document.getElementById('nombreAtributo').value = '';
    document.getElementById('valorAtributo').value = '';
}

// Función para eliminar atributo de la lista
export function eliminarAtributo() {
    const listaAtributos = document.getElementById('listaAtributos');
    const ultimoAtributo = listaAtributos.lastChild;

    // Verificar si hay elementos en la lista antes de intentar eliminar
    if (ultimoAtributo) {
        listaAtributos.removeChild(ultimoAtributo);
    } else {
        alert('No hay atributos para eliminar.');
    }
}
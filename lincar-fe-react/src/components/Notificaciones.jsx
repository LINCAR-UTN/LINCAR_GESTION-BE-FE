import Swal from 'sweetalert2'

const notificarSuccess = (entidad) => {
    Swal.fire({
      title: entidad + " agregado/a correctamente!",
      icon: "success"
    });
  }
  
  const notificarError = (error) => {
    Swal.fire({
      title: "No se pudo realizar la operación!",
      text: error,
      icon: "error"
    });
  }

export {notificarSuccess, notificarError}
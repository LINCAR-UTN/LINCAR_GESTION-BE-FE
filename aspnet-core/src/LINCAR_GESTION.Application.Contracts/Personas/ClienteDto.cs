using System;
using System.Collections.Generic;
using System.Text;
using LINCAR_GESTION.OrdenesProduccion;
using Volo.Abp.Application.Dtos;

namespace LINCAR_GESTION.Personas
{
    public class ClienteDto : EntityDto<int>
    {
        // atributos de Persona
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string NumeroTelefono { get; set; }
        public int DNI { get; set; }
        public DateTime FechaHoraAlta { get; set; }
        public DateTime FechaHoraModificado { get; set; }

        // atributos de Cliente
        public string Direccion { get; set; }

        // Relación 1 a * Ordenes de Producción
        // public ICollection<OrdenProduccionDto>? OrdenesProduccion { get; set; }
    }
}

using LINCAR_GESTION.OrdenesProduccion;
using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities;

namespace LINCAR_GESTION.Personas
{
    public class Cliente : Entity<int>
    {
        // atributos de Persona
        public string Nombre { get; set; } = "";
        public string Apellido { get; set; } = "";
        public string NumeroTelefono { get; set; } = "";
        public int DNI { get; set; } = 0;
        public DateTime FechaHoraAlta { get; set; } = DateTime.Now;
        public DateTime? FechaHoraModificado { get; set; }

        // atributos de Cliente
        public string Direccion { get; set; } = "";

        // Relación 1 a * Ordenes de Producción
        public ICollection<OrdenProduccion>? OrdenesProduccion { get; set; }

    }
}

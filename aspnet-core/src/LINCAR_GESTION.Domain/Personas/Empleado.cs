using LINCAR_GESTION.OrdenesTrabajoAutoparte;
using LINCAR_GESTION.SectoresProduccion;
using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities;

namespace LINCAR_GESTION.Personas
{
    public class Empleado : Entity<int>
    {
        // atributos de persona
        public string Nombre { get; set; } = "";
        public string Apellido { get; set; } = "";
        public string NumeroTelefono { get; set; } = "";
        public int DNI { get; set; } = 0;
        public DateTime FechaHoraAlta { get; set; } = DateTime.Now;
        public DateTime? FechaHoraModificado { get; set; }

        // atributos de Empleado
        public bool activo { get; set; } = true;

        //Relación 1 a * OrdenTrabajoAutoparte
        public ICollection<OrdenTrabajoAutoparte>? OrdenesTrabajoAutoparte { get; set; }
        //Relacion 1 a * SectorProduccion
        public ICollection<SectorProduccion>? SectorProduccionEmpleado { get; set; } // Sectores de Producción en los cuales trabaja
        //Relacion 1 a * Encargado -> SectorProduccion
        public ICollection<SectorProduccion>? SectoresProduccionACargo { get; set; } // Sectores de Produccíón de los cuales está a cargo
    }
}

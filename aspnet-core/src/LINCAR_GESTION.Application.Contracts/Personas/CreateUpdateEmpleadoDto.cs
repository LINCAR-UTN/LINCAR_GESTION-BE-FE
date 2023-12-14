using System;
using System.Collections.Generic;
using System.Text;

namespace LINCAR_GESTION.Personas
{
    public class CreateUpdateEmpleadoDto
    {
        public int? Id { get; set; }
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
        //public ICollection<int>? OrdenesTrabajoAutoparteIds { get; set; }
        //Relacion 1 a * SectorProduccion
        //public ICollection<int>? SectorProduccionEmpleadoIds { get; set; } // Sectores de Producción en los cuales trabaja
        //Relacion 1 a * Encargado -> SectorProduccion
        //public ICollection<int>? SectoresProduccionACargoIds { get; set; } // Sectores de Produccíón de los cuales está a cargo
    }
}

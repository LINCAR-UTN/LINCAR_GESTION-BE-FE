using System.Collections.Generic;
using Volo.Abp.Application.Dtos;

namespace LINCAR_GESTION.SectoresProduccion
{
    public class SectorProduccionDto : EntityDto<int>
    {
        public int NroSector { get; set; } = 0;
        public string Nombre { get; set; } = string.Empty;
        public string Descripcion { get; set; } = string.Empty;

        //Relación 1 a * Empleado(s)
        public ICollection<int>? EmpleadosId { get; set; } // empleados que trabajan en el Sector de producción

        //Relación * a 1 Encargado
        public int EncargadoId { get; set; } // Un sector de producción tiene un encargado

        public ICollection<int>? AutopartesIds { get; set; }
    }
}

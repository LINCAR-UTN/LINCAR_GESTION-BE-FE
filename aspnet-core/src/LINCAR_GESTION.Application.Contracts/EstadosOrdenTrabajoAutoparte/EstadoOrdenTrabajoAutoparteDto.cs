using System;
using System.Collections.Generic;
using System.Text;
using LINCAR_GESTION.EstadosOrdenProduccion;
using Volo.Abp.Application.Dtos;

namespace LINCAR_GESTION.EstadosOrdenTrabajoAutoparte
{
    public class EstadoOrdenTrabajoAutoparteDto : EntityDto<int>
    {
        public NombreEstadoOrdenProduccion Nombre { get; set; }
        public DateTime FechaHoraHasta { get; set; }

        // Orden a la que pertenece
        public int OrdenTrabajoAutoparteId { get; set; }
    }
}

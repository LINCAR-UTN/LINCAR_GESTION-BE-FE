using System;
using System.Collections.Generic;
using System.Text;
using LINCAR_GESTION.OrdenesProduccion;
using Volo.Abp.Application.Dtos;

namespace LINCAR_GESTION.EstadosOrdenProduccion
{
    public class EstadoOrdenProduccionDto : EntityDto<int>
    {
        public NombreEstadoOrdenProduccion Nombre { get; set; }
        public DateTime FechaHoraHasta { get; set; }

        // Relación * a * OrdenProduccion
        public OrdenProduccionDto Orden { get; set; } // cada estado pertenece a una sola orden porque representa un estado de una orden en un momento determinado
    }
}

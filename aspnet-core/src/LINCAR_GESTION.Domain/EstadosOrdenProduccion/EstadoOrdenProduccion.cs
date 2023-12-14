using LINCAR_GESTION.OrdenesProduccion;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;

namespace LINCAR_GESTION.EstadosOrdenProduccion
{
    public class EstadoOrdenProduccion : Entity<int>
    {
        public NombreEstadoOrdenProduccion Nombre {  get; set; }
        public DateTime FechaHoraHasta {get; set; }

        // Relación * a 1 OrdenProduccion
        public OrdenProduccion OrdenProduccion { get; set; } // cada estado pertenece a una sola orden porque representa un estado de una orden en un momento determinado
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LINCAR_GESTION.EstadosOrdenProduccion;
using LINCAR_GESTION.OrdenesTrabajoAutoparte;
using Volo.Abp.Domain.Entities;

namespace LINCAR_GESTION.EstadosOrdenTrabajoAutoparte
{
    public class EstadoOrdenTrabajoAutoparte : Entity<int>
    {
        public NombreEstadoOrdenProduccion Nombre { get; set; }
        public DateTime FechaHoraHasta { get; set; }

        // Orden a la que pertenece
        public OrdenTrabajoAutoparte OrdenTrabajoAutoparte { get; set; }
    }
}

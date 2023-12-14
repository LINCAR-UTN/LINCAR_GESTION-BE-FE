using System;
using System.Collections.Generic;
using System.Text;
using LINCAR_GESTION.Autopartes;
using LINCAR_GESTION.EstadosOrdenTrabajoAutoparte;
using LINCAR_GESTION.Observaciones;
using Volo.Abp.Application.Dtos;

namespace LINCAR_GESTION.OrdenesTrabajoAutoparte
{
    public class OrdenTrabajoAutoparteDto : EntityDto<int>
    {
        public int NroOrden { get; set; }
        public DateTime FechaHoraCreada { get; set; }
        public int Cantidad { get; set; }

        // Relación 0..1 a * OrdenProduccion
        public int? ordenProduccionId { get; set; }

        // Relación * a * EstadosOrdenTrabajoAutoparte
        public ICollection<EstadoOrdenTrabajoAutoparteDto>? Estados { get; set; }

        // Relación 0..1 a * Empleado
        public int EmpleadoId { get; set; }

        // Relación 0..1 a * Solicitante
        public int SolicitanteId { get; set; } // Encargado que solicita

        // Relación 1 a * Autoparte
        public AutoparteDto Autoparte { get; set; }

        // Relacion 1 a * observaciones
        public ICollection<ObservacionDto>? Observaciones { get; set; }
    }
}

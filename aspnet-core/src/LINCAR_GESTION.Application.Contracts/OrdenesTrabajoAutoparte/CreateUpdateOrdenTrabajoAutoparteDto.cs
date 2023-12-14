using System;
using System.Collections.Generic;
using System.Text;

namespace LINCAR_GESTION.OrdenesTrabajoAutoparte
{
    public class CreateUpdateOrdenTrabajoAutoparteDto
    {
        public int? Id { get; set; }
        public int NroOrden { get; set; }
        public DateTime FechaHoraCreada { get; set; }
        public int Cantidad { get; set; }

        // Relación 0..1 a * OrdenProduccion
        public int? ordenProduccionId { get; set; }

        // Relación * a * EstadosOrdenTrabajoAutoparte
        // public ICollection<EstadoOrdenTrabajoAutoparteDto>? Estados { get; set; }

        // Relación 0..1 a * Empleado
        public int EmpleadoId { get; set; } = 0;

        // Relación 0..1 a * Solicitante
        public int SolicitanteId { get; set; } = 0; // Encargado que solicita

        // Relación 1 a * Autoparte
        public int AutoparteId { get; set; } = 0;

        // Relacion 1 a * observaciones
        // public ICollection<ObservacionDto>? Observaciones { get; set; }
    }
}

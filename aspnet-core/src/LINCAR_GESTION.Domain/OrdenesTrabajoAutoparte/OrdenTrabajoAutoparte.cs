using LINCAR_GESTION.Autopartes;
using LINCAR_GESTION.EstadosOrdenTrabajoAutoparte;
using LINCAR_GESTION.Observaciones;
using LINCAR_GESTION.OrdenesProduccion;
using LINCAR_GESTION.Personas;
using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities;

namespace LINCAR_GESTION.OrdenesTrabajoAutoparte
{
    public class OrdenTrabajoAutoparte : Entity<int>
    {
        public int NroOrden {  get; set; }
        public DateTime FechaHoraCreada {  get; set; } = DateTime.Now;
        public int Cantidad { get; set; } = 0; 

        // Relación 0..1 a * OrdenProduccion
        public OrdenProduccion? ordenProduccion { get; set; }

        // Relación * a * EstadosOrdenTrabajoAutoparte
        public ICollection<EstadoOrdenTrabajoAutoparte>? Estados { get; set; }

        // Relación 0..1 a * Empleado
        public Empleado Empleado { get; set; }

        // Relación 0..1 a * Solicitante
        public Empleado Solicitante { get; set; } // Encargado que solicita

        // Relación 1 a * Autoparte
        public Autoparte Autoparte { get; set; }

        // Relacion 1 a * observaciones
        public ICollection<Observacion>? Observaciones { get; set; }
    }
}

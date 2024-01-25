using System;
using System.Collections.Generic;
using System.Text;
using LINCAR_GESTION.Atributos;
using LINCAR_GESTION.Observaciones;

namespace LINCAR_GESTION.Autopartes
{
    public class CreateUpdateAutoparteDto
    {
        public int? Id { get; set; }
        public int? CodAutoparte { get; set; }
        public string? Nombre { get; set; }
        public bool? Activa { get; set; } = true;

        // Relacion 1 a * Observaciones
        public ICollection<ObservacionDto>? Observaciones { get; set; }

        // Relacion 1 a * OrdenTrabajoAutoparte
        // public ICollection<OrdenTrabajoAutoparteDto>? OrdenesTrabajoAutopartes { get; set; }

        // Relación * a * SectorProduccion
        public ICollection<int>? SectoresProduccionIds { get; set; }
        // Relación * a * ModeloProducto
        public ICollection<int>? ModelosProduccionIds { get; set; }

        // Relación 1 a * Atributo
       // public ICollection<AtributoDto>? Atributos { get; set; }
    }
}

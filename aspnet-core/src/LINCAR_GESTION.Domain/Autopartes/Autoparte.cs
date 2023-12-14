using LINCAR_GESTION.Atributos;
using LINCAR_GESTION.ModelosProducto;
using LINCAR_GESTION.Observaciones;
using LINCAR_GESTION.OrdenesTrabajoAutoparte;
using LINCAR_GESTION.SectoresProduccion;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Entities.Auditing;

namespace LINCAR_GESTION.Autopartes
{
    public class Autoparte : Entity<int>
    {
        public int CodAutoparte { get; set; } = 0;
        public string Nombre { get; set; } = string.Empty;
        public bool Activa { get; set; } = true;
        
        // Relacion 1 a * Observaciones
        public ICollection<Observacion>? Observaciones { get; set; }

        // Relacion 1 a * OrdenTrabajoAutoparte
        public ICollection<OrdenTrabajoAutoparte>? OrdenesTrabajoAutopartes { get; set; }
        
        // Relación * a * SectorProduccion
        public ICollection<SectorProduccion>? SectoresProduccion { get; set; }
        // Relación * a * ModeloProducto
        public ICollection<ModeloProducto>? ModelosProduccion { get; set; } 

        // Relación 1 a * Atributo
        public ICollection<Atributo>? Atributos { get; set; }

    }
}

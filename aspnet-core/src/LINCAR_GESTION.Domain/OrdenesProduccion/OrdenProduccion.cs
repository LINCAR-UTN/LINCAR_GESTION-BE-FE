using LINCAR_GESTION.EstadosOrdenProduccion;
using LINCAR_GESTION.ModelosProducto;
using LINCAR_GESTION.Observaciones;
using LINCAR_GESTION.OrdenesTrabajoAutoparte;
using LINCAR_GESTION.Personas;
using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities;

namespace LINCAR_GESTION.OrdenesProduccion
{
    public class OrdenProduccion : Entity<int>
    {
        public int NroOrden { get; set; } = 0;
        public DateTime FechaEmision { get; set; } = DateTime.Now;
        public DateTime? FechaEntrega { get; set; }
        public DateTime? FechaEntregaEfectiva { get; set; }
        public string DescripcionCamion { get; set; } = "";
        public float CentroRuedaCamion { get; set; } = 0;
        public string ModeloCamion { get; set; } = "";
        public string CajaVelocidadCamion { get; set; } = "";
        public float AnchoChasisCamion { get; set; } = 0;
        public string DominioCamion { get; set; } = "";
        public string ColorCamion { get; set; } = "";
        public float LargoChasisCamion { get; set; } = 0;
        public float LargoTotalMts { get; set; } = 0;
        public float LargoUtilMts { get; set; } = 0;
        public float AltoTotalMts { get; set; } = 0;
        public float AltoUtilMts { get; set; } = 0;
        public float AnchoTotalMts { get; set; } = 0;
        public float AnchoUtilMts { get; set; } = 0;
        public float EspesorPisoMms { get; set; } = 0;
        public string TipoUnidad { get; set; } = "";
        public string TipoPiso { get; set; } = "";
        public string ColorZocalo { get; set; } = "";
        public string ColorInferior { get; set; } = "";
        public string PuertaLateral { get; set; } = "";
        public string PuertaTrasera { get; set; } = "";
        public int Malacates { get; set; } = 0;
        public int Arcos { get; set; } = 0;
        public string Escalera { get; set; } = "";
        public int Boquillas { get; set; } = 0;
        public int PortaEstacas { get; set; } = 0;
        public float Voltaje { get; set; } = 0;

        // Relación 1 a * Cliente
        public Cliente Cliente { get; set; }

        // Relacion * a * EstadoOrdenProduccion 
        public ICollection<EstadoOrdenProduccion>? Estados { get; set; }

        // Relacion 1 a * ModeloProducto
        public ModeloProducto ModeloProducto { get; set; }

        // Relacion 0..1 a * OrdenTrabajoAutoparte
        public ICollection<OrdenTrabajoAutoparte>? OrdenesTrabajoAutoparte { get; set; }

        // Relacion 1 a * Observaciones
        public ICollection<Observacion>? Observaciones { get; set; }

    }
}

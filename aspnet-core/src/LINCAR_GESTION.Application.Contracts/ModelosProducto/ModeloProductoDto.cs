using System;
using System.Collections.Generic;
using System.Text;
using LINCAR_GESTION.Autopartes;
using LINCAR_GESTION.OrdenesProduccion;
using Volo.Abp.Application.Dtos;

namespace LINCAR_GESTION.ModelosProducto
{
    public class ModeloProductoDto : EntityDto<int>
    {
        public string CodigoModelo { get; set; }
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
        public float Voltaje { get; set; } = 12;

        // Relacion 1 a * OrdenesProducción
        // public ICollection<OrdenProduccionDto>? OrdenesProduccion { get; set; } // creo que esta navigabilidad no es necesaria

        // Relación * a * ModeloProducto
        public ICollection<AutoparteDto>? Autopartes { get; set; }
    }
}

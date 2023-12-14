using System;
using System.Collections.Generic;
using System.Text;

namespace LINCAR_GESTION.ModelosProducto
{
    public class CreateUpdateModeloProductoDto
    {
        public int? Id { get; set; }
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
    }
}

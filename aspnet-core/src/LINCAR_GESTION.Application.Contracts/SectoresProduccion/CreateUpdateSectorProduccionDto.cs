using System;
using System.Collections.Generic;
using System.Text;

namespace LINCAR_GESTION.SectoresProduccion
{
    public class CreateUpdateSectorProduccionDto
    {
        public int? Id { get; set; }
        public int NroSector { get; set; } = 0;
        public string Nombre { get; set; } = string.Empty;
        public string Descripcion { get; set; } = string.Empty;
        //Relación * a 1 Encargado
        public int EncargadoId { get; set; } // Un sector de producción tiene un encargado
    }
}

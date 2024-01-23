using System;
using System.Collections.Generic;
using System.Text;
using LINCAR_GESTION.Autopartes;
using Volo.Abp.Application.Dtos;

namespace LINCAR_GESTION.Atributos
{
    public class AtributoDto : EntityDto<int>

    {
        public int? CodAtributo { get; set; }

        public string Nombre { get; set; }
        public string Valor { get; set; } //string ya que puede ser un atrbituo de tipo color p ejemplo

        // relación * a 1 con Autoparte
        public int AutoparteId { get; set; }
    }
}

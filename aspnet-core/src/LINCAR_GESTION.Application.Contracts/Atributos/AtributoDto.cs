using System;
using System.Collections.Generic;
using System.Text;
using LINCAR_GESTION.Autopartes;
using Volo.Abp.Application.Dtos;

namespace LINCAR_GESTION.Atributos
{
    public class AtributoDto : EntityDto<int>

    {

        public string Nombre { get; set; }
        public string Valor { get; set; } //string ya que puede ser un atrbituo de tipo color p ejemplo
        public int AutoparteId { get; set; } //codAutoparte
    }
}

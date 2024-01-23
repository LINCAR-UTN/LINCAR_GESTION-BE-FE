using LINCAR_GESTION.Autopartes;
using System;
using System.Collections.Generic;
using System.Text;

namespace LINCAR_GESTION.Atributos
{
    public class CreateUpdateAtributoDto

    {
        public int? Id { get; set; }

        public string Nombre { get; set; }
        public string Valor { get; set; } //string ya que puede ser un atrbituo de tipo color p ejemplo

        // relación * a 1 con Autoparte
        public int AutoparteId { get; set; }
    }
}

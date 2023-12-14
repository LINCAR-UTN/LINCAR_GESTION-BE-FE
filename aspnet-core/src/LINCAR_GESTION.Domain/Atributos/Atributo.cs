using LINCAR_GESTION.Autopartes;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Entities.Auditing;

namespace LINCAR_GESTION.Atributos
{
    public class Atributo: Entity<int>
    {
        public string Nombre { get; set; }
        public string Valor { get;set; } //string ya que puede ser un atrbituo de tipo color p ejemplo

        // relación * a 1 con Autoparte
        public Autoparte Autoparte { get; set; }

    }
}

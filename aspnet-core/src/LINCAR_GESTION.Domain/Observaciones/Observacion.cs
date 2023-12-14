using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;

namespace LINCAR_GESTION.Observaciones
{
    public class Observacion : Entity<int>
    {
        public string Texto { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace LINCAR_GESTION.Observaciones
{
    public class ObservacionDto : EntityDto<int>
    {
        public string Texto { get; set; }
    }
}

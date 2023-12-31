﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace LINCAR_GESTION.OrdenesTrabajoAutoparte
{
    public interface IOrdenTrabajoAutoparteAppService : IApplicationService
    {
        Task<OrdenTrabajoAutoparteDto> CreateUpdateOrdenTrabajoAutoparteAsync(CreateUpdateOrdenTrabajoAutoparteDto input);
    }
}

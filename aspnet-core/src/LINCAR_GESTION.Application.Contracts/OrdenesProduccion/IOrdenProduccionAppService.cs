using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace LINCAR_GESTION.OrdenesProduccion
{
    public interface IOrdenProduccionAppService : IApplicationService
    {
        Task<OrdenProduccionDto> CreateUpdateOrdenProduccionAsync(CreateUpdateOrdenProduccionDto input);
    }
}

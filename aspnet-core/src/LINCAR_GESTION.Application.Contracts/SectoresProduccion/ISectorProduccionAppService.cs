using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace LINCAR_GESTION.SectoresProduccion
{
    public interface ISectorProduccionAppService : IApplicationService
    {
        Task<SectorProduccionDto> CreateUpdateSectorProduccionAsync(CreateUpdateSectorProduccionDto input);
        Task<ICollection<SectorProduccionDto>> GetSectoresProduccionAsync();
    }
}

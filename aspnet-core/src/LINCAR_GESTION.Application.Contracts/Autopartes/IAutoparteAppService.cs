using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace LINCAR_GESTION.Autopartes
{
    public interface IAutoparteAppService : IApplicationService
    {
        Task<AutoparteDto> CreateUpdateAutoparteAsync(CreateUpdateAutoparteDto input);
        Task<ICollection<AutoparteDto>> GetAutopartesAsync();
    }
}

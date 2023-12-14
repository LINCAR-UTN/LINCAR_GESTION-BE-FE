using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace LINCAR_GESTION.Personas
{
    public interface IEmpleadoAppService : IApplicationService
    {
        Task<EmpleadoDto> CreateUpdateEmpleadoAsync(CreateUpdateEmpleadoDto input);
    }
}

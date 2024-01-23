using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace LINCAR_GESTION.Atributos
{
    public interface IAtributoAppService : IApplicationService
    {

        Task<AtributoDto> CreateUpdateAtributoAsync(CreateUpdateAtributoDto input);
        Task<ICollection<AtributoDto>> GetAtributosByAutoparteIdAsync(int autoparteId);
        Task<ICollection<AtributoDto>> GetAtributosAsync();

    }
}
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace LINCAR_GESTION.ModelosProducto
{
    public interface IModeloProductoAppService : IApplicationService
    {
        Task<ModeloProductoDto> CreateUpdateModeloProductoAsync(CreateUpdateModeloProductoDto input);
        Task<ICollection<ModeloProductoDto>> GetModelosProductoAsync();
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace LINCAR_GESTION.ModelosProducto
{
    public class ModeloProductoAppService : LINCAR_GESTIONAppService, IModeloProductoAppService
    {
        private readonly IRepository<ModeloProducto, int> _modeloProductoRepository;
        public ModeloProductoAppService(IRepository<ModeloProducto, int> modeloProductoRepository)
        {
            _modeloProductoRepository = modeloProductoRepository;
        }

        public async Task<ModeloProductoDto> CreateUpdateModeloProductoAsync(CreateUpdateModeloProductoDto input)
        {
            var modeloProducto = ObjectMapper.Map<CreateUpdateModeloProductoDto, ModeloProducto>(input);

            if (input.Id is null)
            {
                modeloProducto = await _modeloProductoRepository.InsertAsync(modeloProducto, autoSave: true);
            }
            else
            {
                //var modeloProductoExistente = await _modeloProductoRepository.GetAsync(input.Id.Value, includeDetails: true);

                await _modeloProductoRepository.UpdateAsync(modeloProducto, autoSave: true);
            }

            return ObjectMapper.Map<ModeloProducto, ModeloProductoDto>(modeloProducto);
        }

        public async Task<ICollection<ModeloProductoDto>> GetModelosProductoAsync()
        {
            var modelosProducto = await _modeloProductoRepository.GetListAsync(includeDetails: true);

            return ObjectMapper.Map<ICollection<ModeloProducto>, ICollection<ModeloProductoDto>>(modelosProducto);
        }
    }
}

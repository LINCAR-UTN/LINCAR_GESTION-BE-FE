using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace LINCAR_GESTION.SectoresProduccion
{
    public class SectorProduccionAppService : LINCAR_GESTIONAppService, ISectorProduccionAppService
    {
        private readonly IRepository<SectorProduccion, int> _sectorProduccionRepository;
        public SectorProduccionAppService(IRepository<SectorProduccion, int> sectorProduccionRepository)
        {
            _sectorProduccionRepository = sectorProduccionRepository;
        }

        public async Task<ICollection<SectorProduccionDto>> GetSectoresProduccionAsync()
        {
            var sectoresProduccion = await _sectorProduccionRepository.GetListAsync(includeDetails: true);

            return ObjectMapper.Map<ICollection<SectorProduccion>, ICollection<SectorProduccionDto>>(sectoresProduccion);
        }

        public async Task<SectorProduccionDto> CreateUpdateSectorProduccionAsync(CreateUpdateSectorProduccionDto input)
        {
            var sectorProduccion = ObjectMapper.Map<CreateUpdateSectorProduccionDto, SectorProduccion>(input);

            if (input.Id is null)
            {
                sectorProduccion = await _sectorProduccionRepository.InsertAsync(sectorProduccion, autoSave: true);
            }
            else
            {
                // sectorProduccion = await _sectorProduccionRepository.GetAsync(input.Id.Value, includeDetails: true);
                await _sectorProduccionRepository.UpdateAsync(sectorProduccion, autoSave: true);
            }

            return ObjectMapper.Map<SectorProduccion, SectorProduccionDto>(sectorProduccion);
        }
    }
}


using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace LINCAR_GESTION.Autopartes
{
    public class AutoparteAppService : LINCAR_GESTIONAppService, IAutoparteAppService
    {
        private readonly IRepository<Autoparte, int> _autoparteRepository;
        public AutoparteAppService(IRepository<Autoparte, int> autoparteRepository)
        {
            _autoparteRepository = autoparteRepository;
        }

        public async Task<AutoparteDto> CreateUpdateAutoparteAsync(CreateUpdateAutoparteDto input)
        {
            var autoparte = ObjectMapper.Map<CreateUpdateAutoparteDto, Autoparte>(input);

            if (input.Id is null)
            {
                autoparte = await _autoparteRepository.InsertAsync(autoparte, autoSave: true);
            }
            else
            {
                //var autoparteExistente = await _autoparteRepository.GetAsync(input.Id.Value, includeDetails: true);

                await _autoparteRepository.UpdateAsync(autoparte, autoSave: true);
            }

            return ObjectMapper.Map<Autoparte, AutoparteDto>(autoparte);
        }

        public async Task<ICollection<AutoparteDto>> GetAutopartesAsync()
        {
            var autopartes = await _autoparteRepository.GetListAsync(includeDetails: true);

            return ObjectMapper.Map<ICollection<Autoparte>, ICollection<AutoparteDto>>(autopartes);
        }
    }
}


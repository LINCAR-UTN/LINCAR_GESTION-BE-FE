using LINCAR_GESTION.Atributos;
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
        private readonly IRepository<Atributo, int> _atributoRepository;

        public AutoparteAppService(IRepository<Autoparte, int> autoparteRepository, IRepository<Atributo, int> atributoRepository)
        {
            _autoparteRepository = autoparteRepository;
            _atributoRepository = atributoRepository;
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
            var autopartes = await _autoparteRepository
                .GetListAsync(includeDetails: true);

  
            var autopartesDto = ObjectMapper.Map<ICollection<Autoparte>, ICollection<AutoparteDto>>(autopartes);

            //>>>>>>>>> PARA DEVOLVER LOS OBJETOS DENTRO DE AUTOPARTE<<<<<<<<<<<<
            // Iterar sobre cada AutoparteDto y cargar las observaciones y atributos
            //foreach (var autoparteDto in autopartesDto)
            //{
            //    // Cargar Observaciones
            //    //autoparteDto.Observaciones = await GetObservacionesAsync(autoparteDto.Id);

            //    // Cargar Atributos
            //    autoparteDto.Atributos = await GetAtributosAsync(autoparteDto.Id);
            //}

            return autopartesDto;
        }
        private async Task<ICollection<AtributoDto>> GetAtributosAsync(int autoparteId)
        {
            // Obtener la lista de atributos relacionados con la autoparte específica
            var atributos = await _atributoRepository
                .GetListAsync(a => a.AutoparteId == autoparteId);

            // Mapear la lista de atributos a DTOs
            var atributosDto = ObjectMapper.Map<ICollection<Atributo>, ICollection<AtributoDto>>(atributos);

            // Establecer AutoparteId igual al parámetro de entrada para cada AtributoDto
            foreach (var atributoDto in atributosDto)
            {
                atributoDto.AutoparteId = autoparteId;
            }

            return atributosDto;
        }



    }
}


﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace LINCAR_GESTION.Atributos
{
    public class AtributoAppService : LINCAR_GESTIONAppService, IAtributoAppService
    {
        private readonly IRepository<Atributo, int> _atributoRepository;

        public AtributoAppService(IRepository<Atributo, int> atributoRepository)
        {
            _atributoRepository = atributoRepository;
        }

        //post
        public async Task<AtributoDto> CreateUpdateAtributoAsync(CreateUpdateAtributoDto input)
        {
            var atributo = ObjectMapper.Map<CreateUpdateAtributoDto, Atributo>(input);

            if (input.Id is null)
            {
                atributo = await _atributoRepository.InsertAsync(atributo, autoSave: true);
            }
            else
            {
                await _atributoRepository.UpdateAsync(atributo, autoSave: true);
            }

            return ObjectMapper.Map<Atributo, AtributoDto>(atributo);
        }


        //getall
        public async Task<ICollection<AtributoDto>> GetAtributosAsync()
        {
            var atributos = await _atributoRepository
     .GetListAsync(includeDetails: false);

            return ObjectMapper.Map<ICollection<Atributo>, ICollection<AtributoDto>>(atributos);
        }


        //get atributo by id
        public async Task<AtributoDto> GetAsync(int id)
        {
            var atributo = await _atributoRepository.GetAsync(id);
            return ObjectMapper.Map<Atributo, AtributoDto>(atributo);
        }


        //get atributos by autoparte id
        public async Task<ICollection<AtributoDto>> GetAtributosByAutoparteIdAsync(int autoparteId)
        {
            var atributos = await _atributoRepository
            .GetListAsync(x => x.AutoparteId == autoparteId);


            return ObjectMapper.Map<List<Atributo>, List<AtributoDto>>(atributos);
        }

    }
}

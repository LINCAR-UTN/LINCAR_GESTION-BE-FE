using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace LINCAR_GESTION.Personas
{
    public class ClienteAppService : LINCAR_GESTIONAppService, IClienteAppService
    {
        private readonly IRepository<Cliente, int> _clienteRepository;
        public ClienteAppService(IRepository<Cliente, int> clienteRepository)
        {            
            _clienteRepository = clienteRepository;
        }

        public async Task<ClienteDto> CreateUpdateClienteAsync(CreateUpdateClienteDto input)
        {
            var cliente = ObjectMapper.Map<CreateUpdateClienteDto,Cliente>(input);

            if (input.Id is null)
            {
                cliente = await _clienteRepository.InsertAsync(cliente, autoSave: true);
            }
            else
            {
                // cliente = await _clienteRepository.GetAsync(input.Id.Value, includeDetails: true);
                await _clienteRepository.UpdateAsync(cliente, autoSave: true);
            }

            return ObjectMapper.Map<Cliente, ClienteDto>(cliente);
        }
        public async Task<ICollection<ClienteDto>> GetClientesAsync()
        {
            var clientes = await _clienteRepository.GetListAsync(includeDetails: true);

            return ObjectMapper.Map<ICollection<Cliente>, ICollection<ClienteDto>>(clientes);
        }
    }
}

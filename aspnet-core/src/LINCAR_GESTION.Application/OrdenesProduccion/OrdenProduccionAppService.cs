using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LINCAR_GESTION.EstadosOrdenProduccion;
using LINCAR_GESTION.ModelosProducto;
using LINCAR_GESTION.Personas;
using Microsoft.AspNetCore.Identity;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;

namespace LINCAR_GESTION.OrdenesProduccion
{
    public class OrdenProduccionAppService : LINCAR_GESTIONAppService, IOrdenProduccionAppService
    {
        private readonly IRepository<OrdenProduccion, int> _ordenProduccionRepository;
        private readonly IRepository<ModeloProducto, int> _modeloProductoRepository;
        private readonly IRepository<Cliente, int> _clienteRepository;

        private readonly UserManager<IdentityUser> _userManager;
        // private readonly OrdenProduccionManager _ordenProduccionManager;

        public OrdenProduccionAppService(
            IRepository<OrdenProduccion, int> ordenProduccionRepository,
            IRepository<ModeloProducto, int> modeloProductoRepository,
            IRepository<Cliente, int> clienteRepository
            //UserManager<IdentityUser> userManager,
            )
        {
            _ordenProduccionRepository = ordenProduccionRepository;
            _modeloProductoRepository = modeloProductoRepository;
            _clienteRepository = clienteRepository;
            //_userManager = userManager;
        }

        public async Task<ICollection<OrdenProduccionDto>> GetAllOrdenesTrabajoProduccionAsync()
        {
            var ordenesProduccion = await _ordenProduccionRepository.GetListAsync(includeDetails: true);

            return ObjectMapper.Map<ICollection<OrdenProduccion>, ICollection<OrdenProduccionDto>>(ordenesProduccion);
        }

        public async Task<OrdenProduccionDto> GetOrdenProduccionAsync(int id)
        {
            var ordenProduccion = await _ordenProduccionRepository.GetAsync(id, includeDetails: true);

            return ObjectMapper.Map<OrdenProduccion, OrdenProduccionDto>(ordenProduccion);
        }

        public async Task<ICollection<OrdenProduccionDto>> GetOrdenesTrabajoProduccionPorEstadoActualAsync(EstadoOrdenProduccion estado)
        {
            var ordenesProduccion = await _ordenProduccionRepository.GetListAsync(op => op.Estados.Last() == estado, includeDetails: true);

            return ObjectMapper.Map<ICollection<OrdenProduccion>, ICollection<OrdenProduccionDto>>(ordenesProduccion);
        }

        public async Task<OrdenProduccionDto> CreateUpdateOrdenProduccionAsync(CreateUpdateOrdenProduccionDto input)
        {
            var ordenProduccion = ObjectMapper.Map<CreateUpdateOrdenProduccionDto, OrdenProduccion>(input);
            if (input.ModeloProductoId != null)
            {
                var modeloProducto = await _modeloProductoRepository.GetAsync(input.ModeloProductoId.Value);
                ordenProduccion.ModeloProducto = modeloProducto;
            }

            if (input.ClienteId != null)
            {
                var cliente = await _clienteRepository.GetAsync(input.ClienteId.Value);
                ordenProduccion.Cliente = cliente;
            }

            if (input.Id is null)
            {
                ordenProduccion = await _ordenProduccionRepository.InsertAsync(ordenProduccion, autoSave: true);
            }
            else
            {
                await _ordenProduccionRepository.UpdateAsync(ordenProduccion, autoSave: true);
            }

            return ObjectMapper.Map<OrdenProduccion, OrdenProduccionDto>(ordenProduccion);
        }

        //public async Task<OrdenProduccionDto> CreateOrdenProduccionBasedOnModeloProductoAsync(int modeloProductoId)
        //{
        //    var modeloProducto = await _modeloProductoRepository.GetAsync(modeloProductoId);
        //    var ordenBasadaEnElModelo = ObjectMapper.Map<ModeloProducto, CreateUpdateOrdenProduccionDto>(modeloProducto);

        //    CreateUpdateOrdenProduccionAsync(ordenBasadaEnElModelo);
        //}
    }
}

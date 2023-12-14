/*using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Volo.Abp.Identity;

namespace LINCAR_GESTION.OrdenesProduccion
{
    public class OrdenProduccionManager : DomainService
    {
        private readonly IRepository<OrdenProduccion, int> _ordenProduccionRepository;
        public OrdenProduccionManager(IRepository<OrdenProduccion, int> ordenProduccionRepository)
        {
            _ordenProduccionRepository = ordenProduccionRepository;
        }

        public async Task<OrdenProduccion> CreateAsyncOrUpdate(int? id, string name, int? parentId, IdentityUser identityUser)
        {
            OrdenProduccion ordenProduccion = null;

            if (id is not null)
            {
                // Si el id no es nulo significa que se modifica el tema
                ordenProduccion = await _ordenProduccionRepository.GetAsync(id.Value, includeDetails: true);

                ordenProduccion.Name = name;
            }
            else
            {
                //Si el id es nulo, es un tema nuevo
                ordenProduccion = new OrdenProduccion { Name = name, User = identityUser };
            };

            return ordenProduccion;
        }
    }
}*/
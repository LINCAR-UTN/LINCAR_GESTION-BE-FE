using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace LINCAR_GESTION.Personas
{
    public class EmpleadoAppService : LINCAR_GESTIONAppService, IEmpleadoAppService
    {
        private readonly IRepository<Empleado, int> _empleadoRepository;
        public EmpleadoAppService(IRepository<Empleado, int> empleadoRepository)
        {
            _empleadoRepository = empleadoRepository;
        }

        public async Task<EmpleadoDto> CreateUpdateEmpleadoAsync(CreateUpdateEmpleadoDto input)
        {
            var empleado = ObjectMapper.Map<CreateUpdateEmpleadoDto, Empleado>(input);

            if (input.Id is null)
            {
                empleado = await _empleadoRepository.InsertAsync(empleado, autoSave: true);
            }
            else
            {
                // empleado = await _empleadoRepository.GetAsync(input.Id.Value, includeDetails: true);
                await _empleadoRepository.UpdateAsync(empleado, autoSave: true);
            }

            return ObjectMapper.Map<Empleado, EmpleadoDto>(empleado);
        }
    }
}



using System.Threading.Tasks;
using LINCAR_GESTION.Autopartes;
using LINCAR_GESTION.ModelosProducto;
using LINCAR_GESTION.OrdenesProduccion;
using LINCAR_GESTION.OrdenesTrabajoAutoparte;
using LINCAR_GESTION.Personas;
using LINCAR_GESTION.SectoresProduccion;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace LINCAR_GESTION;

public class LINCAR_GESTIONTestDataSeedContributor : IDataSeedContributor, ITransientDependency
{
    private readonly IRepository<ModeloProducto, int> _modeloProductoRepository;
    private readonly IRepository<Cliente, int> _clienteRepository;
    private readonly IRepository<OrdenProduccion, int> _ordenProduccionRepository;
    private readonly IRepository<Autoparte, int> _autoparteRepository;
    private readonly IRepository<OrdenTrabajoAutoparte, int> _ordenTrabajoAutoparteRepository;
    private readonly IRepository<Empleado, int> _empleadoRepository;
    private readonly IRepository<SectorProduccion, int> _sectorProduccionRepository;

    public LINCAR_GESTIONTestDataSeedContributor
        (
        IRepository<ModeloProducto,int> modeloProductoRepository, 
        IRepository<Cliente, int> clienteRepository, 
        IRepository<OrdenProduccion, int> ordenProduccionRepository,
        IRepository<Autoparte, int> autoparteRepository,
        IRepository<OrdenTrabajoAutoparte, int> ordenTrabajoAutoparteRepository,
        IRepository<Empleado, int> empleadoRepository,
        IRepository<SectorProduccion, int> sectorProduccionRepository
        )
    {
        _modeloProductoRepository = modeloProductoRepository;
        _clienteRepository = clienteRepository;
        _ordenProduccionRepository = ordenProduccionRepository;
        _autoparteRepository = autoparteRepository;
        _ordenTrabajoAutoparteRepository = ordenTrabajoAutoparteRepository;
        _empleadoRepository = empleadoRepository;
        _sectorProduccionRepository = sectorProduccionRepository;
    }
    public async Task SeedAsync(DataSeedContext context)
    {
        // añadir ModelosProducto
        ModeloProducto modeloProducto1 = await _modeloProductoRepository.InsertAsync(new ModeloProducto
        {
            CodigoModelo = "LC-155"
        });

        ModeloProducto modeloProducto2 = await _modeloProductoRepository.InsertAsync(new ModeloProducto
        {
            CodigoModelo = "LC-156"
        });

        // añadir clientes
        Cliente cliente1 = await _clienteRepository.InsertAsync(new Cliente
        {
            Nombre = "Juan",
            Apellido = "Chiappella Zarini"
        });

        Cliente cliente2 = await _clienteRepository.InsertAsync(new Cliente
        {
            Nombre = "Aaron",
            Apellido = "Chiappella"
        });

        Empleado empleado1 = await _empleadoRepository.InsertAsync(new Empleado
        {
            Nombre = "Juan",
            Apellido = "Basgall"

        });

        Empleado empleado2 = await _empleadoRepository.InsertAsync(new Empleado
        {
            Nombre = "Facundo",
            Apellido = "Dun"
        });

        // añadir OrdenesProduccion
        OrdenProduccion ordenProduccion1 = await _ordenProduccionRepository.InsertAsync(new OrdenProduccion
        {
            NroOrden = 500,
            Cliente = cliente2,
            ModeloProducto = modeloProducto2
        });

        OrdenProduccion ordenProduccion2 = await _ordenProduccionRepository.InsertAsync(new OrdenProduccion
        {
            NroOrden = 600,
            Cliente = cliente1,
            ModeloProducto = modeloProducto1
        });

        OrdenProduccion ordenProduccion3 = await _ordenProduccionRepository.InsertAsync(new OrdenProduccion
        {
            NroOrden = 205,
            Cliente = cliente1,
            ModeloProducto = modeloProducto1
        });

        Autoparte autoparte1 = await _autoparteRepository.InsertAsync(new Autoparte
        {
            CodAutoparte = 205,
            Nombre = "Autoparte de dataSeed 1"
        });

        Autoparte autoparte2 = await _autoparteRepository.InsertAsync(new Autoparte
        {
            CodAutoparte = 215,
            Nombre = "Autoparte de dataSeed 2"
        });

        OrdenTrabajoAutoparte ordenTrabajoAutoparte1 = await _ordenTrabajoAutoparteRepository.InsertAsync(new OrdenTrabajoAutoparte
        {
            NroOrden = 211,
            Cantidad = 3,
            Empleado = empleado1,
            Solicitante = empleado2,
            Autoparte = autoparte1,
            ordenProduccion = ordenProduccion1
        });

        OrdenTrabajoAutoparte ordenTrabajoAutoparte2 = await _ordenTrabajoAutoparteRepository.InsertAsync(new OrdenTrabajoAutoparte
        {
            NroOrden = 11,
            Cantidad = 5,
            Empleado = empleado2,
            Solicitante = empleado1,
            Autoparte = autoparte2,
            ordenProduccion = ordenProduccion2
        }); 
        
        SectorProduccion sectorProduccion1 = await _sectorProduccionRepository.InsertAsync(new SectorProduccion
        {
            NroSector = 1,
            Nombre = "Primer SectorProduccion",
            Encargado = empleado1
        });

        SectorProduccion sectorProduccion2 = await _sectorProduccionRepository.InsertAsync(new SectorProduccion
        {
            NroSector = 1,
            Nombre = "Segundo SectorProduccion",
            Encargado = empleado1
        });
    }
}

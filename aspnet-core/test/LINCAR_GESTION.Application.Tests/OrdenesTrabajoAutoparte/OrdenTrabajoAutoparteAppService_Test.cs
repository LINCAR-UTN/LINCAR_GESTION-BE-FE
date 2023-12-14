using System;
using System.Linq;
using System.Threading.Tasks;
using LINCAR_GESTION.EntityFrameworkCore;
using LINCAR_GESTION.OrdenesTrabajoAutoparte;
using LINCAR_GESTION.Personas;
using Shouldly;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Uow;
using Xunit;

namespace LINCAR_GESTION.OrdenesTrabajoAutoparte
{
    public class OrdenTrabajoAutoparteAppService_Test : LINCAR_GESTIONApplicationTestBase
    {
        private readonly IOrdenTrabajoAutoparteAppService _ordenTrabajoAutoparteAppService;
        private readonly IDbContextProvider<LINCAR_GESTIONDbContext> _dbContextProvider;
        private readonly IUnitOfWorkManager _unitOfWorkManager;

        public OrdenTrabajoAutoparteAppService_Test()
        {
            _ordenTrabajoAutoparteAppService = GetRequiredService<IOrdenTrabajoAutoparteAppService>();
            _dbContextProvider = GetRequiredService<IDbContextProvider<LINCAR_GESTIONDbContext>>();
            _unitOfWorkManager = GetRequiredService<IUnitOfWorkManager>();
        }

        //[Fact]
        //public async Task Should_Get_All_OrdenesTrabajoAutoparte()
        //{
        //    //Act
        //    var ordenTrabajoAutopartes = await _ordenTrabajoAutoparteAppService.GetOrdenesTrabajoAutoparteAsync();

        //    //Assert
        //    ordenTrabajoAutopartes.ShouldNotBeNull();
        //    ordenTrabajoAutopartes.Count.ShouldBeGreaterThan(1);
        //}

        [Fact]
        public async Task Should_Create_OrdenTrabajoAutoparte()
        {
            //Arrange            
            var input = new CreateUpdateOrdenTrabajoAutoparteDto
            {
                Id = null,
                NroOrden = 101,
                Cantidad = 2,
                EmpleadoId = 2,
                SolicitanteId = 1,
                AutoparteId = 2,
                ordenProduccionId = 1,
            };

            //Act
            var newOrdenTrabajoAutoparte = await _ordenTrabajoAutoparteAppService.CreateUpdateOrdenTrabajoAutoparteAsync(input);

            //Assert
            // Se verifican los datos devueltos por el servicio
            newOrdenTrabajoAutoparte.ShouldNotBeNull();
            newOrdenTrabajoAutoparte.Id.ShouldBePositive();
            // se verifican los datos persistidos por el servicio
            using (var uow = _unitOfWorkManager.Begin())
            {
                var dbContext = await _dbContextProvider.GetDbContextAsync();
                dbContext.OrdenesTrabajoAutoparte.FirstOrDefault(t => t.Id == newOrdenTrabajoAutoparte.Id).ShouldNotBeNull();
                dbContext.OrdenesTrabajoAutoparte.FirstOrDefault(t => t.Id == newOrdenTrabajoAutoparte.Id).NroOrden.ShouldBe(input.NroOrden);
            }
        }

        [Fact]
        public async Task Should_Update_OrdenTrabajoAutoparte()
        {
            //Arrange            
            var input = new CreateUpdateOrdenTrabajoAutoparteDto 
            {
                Id = 2, 
                NroOrden = 105,
                Cantidad = 2,
                EmpleadoId = 2,
                SolicitanteId = 1,
                AutoparteId = 2,
                ordenProduccionId = 1,
            };

            //Act
            var newOrdenTrabajoAutoparte = await _ordenTrabajoAutoparteAppService.CreateUpdateOrdenTrabajoAutoparteAsync(input);

            //Assert
            // Se verifican los datos devueltos por el servicio
            newOrdenTrabajoAutoparte.ShouldNotBeNull();
            newOrdenTrabajoAutoparte.Id.ShouldBePositive();
            // se verifican los datos persistidos por el servicio
            using (var uow = _unitOfWorkManager.Begin())
            {
                var dbContext = await _dbContextProvider.GetDbContextAsync();
                dbContext.OrdenesTrabajoAutoparte.FirstOrDefault(t => t.Id == newOrdenTrabajoAutoparte.Id).ShouldNotBeNull();
                dbContext.OrdenesTrabajoAutoparte.FirstOrDefault(t => t.Id == newOrdenTrabajoAutoparte.Id).NroOrden.ShouldBe(input.NroOrden);
            }
        }
    }
}

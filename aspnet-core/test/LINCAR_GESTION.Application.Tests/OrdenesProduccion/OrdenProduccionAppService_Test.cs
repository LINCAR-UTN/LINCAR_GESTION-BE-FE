using System;
using System.Linq;
using System.Threading.Tasks;
using LINCAR_GESTION.EntityFrameworkCore;
using LINCAR_GESTION.OrdenesProduccion;
using LINCAR_GESTION.Personas;
using Shouldly;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Uow;
using Xunit;

namespace LINCAR_GESTION.OrdenesProduccion
{
    public class OrdenProduccionAppService_Test : LINCAR_GESTIONApplicationTestBase
    {
        private readonly IOrdenProduccionAppService _ordenProduccionAppService;
        private readonly IDbContextProvider<LINCAR_GESTIONDbContext> _dbContextProvider;
        private readonly IUnitOfWorkManager _unitOfWorkManager;

        public OrdenProduccionAppService_Test()
        {
            _ordenProduccionAppService = GetRequiredService<IOrdenProduccionAppService>();
            _dbContextProvider = GetRequiredService<IDbContextProvider<LINCAR_GESTIONDbContext>>();
            _unitOfWorkManager = GetRequiredService<IUnitOfWorkManager>();
        }

        //[Fact]
        //public async Task Should_Get_All_OrdenesProduccion()
        //{
        //    //Act
        //    var ordenProduccions = await _ordenProduccionAppService.GetOrdenesProduccionAsync();

        //    //Assert
        //    ordenProduccions.ShouldNotBeNull();
        //    ordenProduccions.Count.ShouldBeGreaterThan(1);
        //}

        [Fact]
        public async Task Should_Create_OrdenProduccion()
        {
            //Arrange            
            var input = new CreateUpdateOrdenProduccionDto
            {   
                Id = null,
                NroOrden = 101,
                ClienteId = 2,
                ModeloProductoId = 2,
            };

            //Act
            var newOrdenProduccion = await _ordenProduccionAppService.CreateUpdateOrdenProduccionAsync(input);

            //Assert
            // Se verifican los datos devueltos por el servicio
            newOrdenProduccion.ShouldNotBeNull();
            newOrdenProduccion.Id.ShouldBePositive();
            // se verifican los datos persistidos por el servicio
            using (var uow = _unitOfWorkManager.Begin())
            {
                var dbContext = await _dbContextProvider.GetDbContextAsync();
                dbContext.OrdenesProduccion.FirstOrDefault(t => t.Id == newOrdenProduccion.Id).ShouldNotBeNull();
                dbContext.OrdenesProduccion.FirstOrDefault(t => t.Id == newOrdenProduccion.Id).NroOrden.ShouldBe(input.NroOrden);
            }
        }

        [Fact]
        public async Task Should_Update_OrdenProduccion()
        {
            //Arrange            
            var input = new CreateUpdateOrdenProduccionDto { NroOrden = 105, Id = 2 };

            //Act
            var newOrdenProduccion = await _ordenProduccionAppService.CreateUpdateOrdenProduccionAsync(input);

            //Assert
            // Se verifican los datos devueltos por el servicio
            newOrdenProduccion.ShouldNotBeNull();
            newOrdenProduccion.Id.ShouldBePositive();
            // se verifican los datos persistidos por el servicio
            using (var uow = _unitOfWorkManager.Begin())
            {
                var dbContext = await _dbContextProvider.GetDbContextAsync();
                dbContext.OrdenesProduccion.FirstOrDefault(t => t.Id == newOrdenProduccion.Id).ShouldNotBeNull();
                dbContext.OrdenesProduccion.FirstOrDefault(t => t.Id == newOrdenProduccion.Id).NroOrden.ShouldBe(input.NroOrden);
            }
        }
    }
}
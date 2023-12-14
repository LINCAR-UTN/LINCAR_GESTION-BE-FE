using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LINCAR_GESTION.EntityFrameworkCore;
using Shouldly;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Uow;
using Xunit;

namespace LINCAR_GESTION.ModelosProducto
{
    public class ModeloProductoAppService_Test : LINCAR_GESTIONApplicationTestBase
    {
        private readonly IModeloProductoAppService _modeloProductoAppService;
        private readonly IDbContextProvider<LINCAR_GESTIONDbContext> _dbContextProvider;
        private readonly IUnitOfWorkManager _unitOfWorkManager;

        public ModeloProductoAppService_Test()
        {
            _modeloProductoAppService = GetRequiredService<IModeloProductoAppService>();
            _dbContextProvider = GetRequiredService<IDbContextProvider<LINCAR_GESTIONDbContext>>();
            _unitOfWorkManager = GetRequiredService<IUnitOfWorkManager>();
        }

        [Fact]
        public async Task Should_Get_All_ModeloProductos()
        {
            //Act
            var modeloProductos = await _modeloProductoAppService.GetModelosProductoAsync();

            //Assert
            modeloProductos.ShouldNotBeNull();
            modeloProductos.Count.ShouldBeGreaterThan(1);
        }

        [Fact]
        public async Task Should_Create_ModeloProducto()
        {
            //Arrange            
            var input = new CreateUpdateModeloProductoDto 
            { 
                CodigoModelo = "LC-130" 
            };

            //Act
            var newModeloProducto = await _modeloProductoAppService.CreateUpdateModeloProductoAsync(input);

            //Assert
            // Se verifican los datos devueltos por el servicio
            newModeloProducto.ShouldNotBeNull();
            newModeloProducto.Id.ShouldBePositive();
            // se verifican los datos persistidos por el servicio
            using (var uow = _unitOfWorkManager.Begin())
            {
                var dbContext = await _dbContextProvider.GetDbContextAsync();
                dbContext.ModelosProducto.FirstOrDefault(t => t.Id == newModeloProducto.Id).ShouldNotBeNull();
                dbContext.ModelosProducto.FirstOrDefault(t => t.Id == newModeloProducto.Id).CodigoModelo.ShouldBe(input.CodigoModelo);
            }
        }

        [Fact]
        public async Task Should_Update_ModeloProducto()
        {
            //Arrange            
            var input = new CreateUpdateModeloProductoDto { CodigoModelo = "LC-114", Id = 1 };

            //Act
            var newModeloProducto = await _modeloProductoAppService.CreateUpdateModeloProductoAsync(input);

            //Assert
            // Se verifican los datos devueltos por el servicio
            newModeloProducto.ShouldNotBeNull();
            newModeloProducto.Id.ShouldBePositive();
            // se verifican los datos persistidos por el servicio
            using (var uow = _unitOfWorkManager.Begin())
            {
                var dbContext = await _dbContextProvider.GetDbContextAsync();
                dbContext.ModelosProducto.FirstOrDefault(t => t.Id == newModeloProducto.Id).ShouldNotBeNull();
                dbContext.ModelosProducto.FirstOrDefault(t => t.Id == newModeloProducto.Id).CodigoModelo.ShouldBe(input.CodigoModelo);
            }
        }
    }
}
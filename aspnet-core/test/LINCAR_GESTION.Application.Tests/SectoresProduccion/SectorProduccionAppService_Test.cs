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

namespace LINCAR_GESTION.SectoresProduccion
{
    public class SectorProduccionAppService_Test : LINCAR_GESTIONApplicationTestBase
    {
        private readonly ISectorProduccionAppService _sectorProduccionAppService;
        private readonly IDbContextProvider<LINCAR_GESTIONDbContext> _dbContextProvider;
        private readonly IUnitOfWorkManager _unitOfWorkManager;

        public SectorProduccionAppService_Test()
        {
            _sectorProduccionAppService = GetRequiredService<ISectorProduccionAppService>();
            _dbContextProvider = GetRequiredService<IDbContextProvider<LINCAR_GESTIONDbContext>>();
            _unitOfWorkManager = GetRequiredService<IUnitOfWorkManager>();
        }

        [Fact]
        public async Task Should_Get_All_SectoresProduccion()
        {
            //Act
            var sectoresProduccion = await _sectorProduccionAppService.GetSectoresProduccionAsync();

            //Assert
            sectoresProduccion.ShouldNotBeNull();
            sectoresProduccion.Count.ShouldBeGreaterThan(1);
        }

        [Fact]
        public async Task Should_Create_SectorProduccion()
        {
            //Arrange            
            var input = new CreateUpdateSectorProduccionDto
            {
                NroSector = 2,
                Nombre = "SectorProduccion de prueba",
                EncargadoId = 1
            };

            //Act
            var newSectorProduccion = await _sectorProduccionAppService.CreateUpdateSectorProduccionAsync(input);

            //Assert
            // Se verifican los datos devueltos por el servicio
            newSectorProduccion.ShouldNotBeNull();
            newSectorProduccion.Id.ShouldBePositive();
            // se verifican los datos persistidos por el servicio
            using (var uow = _unitOfWorkManager.Begin())
            {
                var dbContext = await _dbContextProvider.GetDbContextAsync();
                dbContext.SectoresProduccion.FirstOrDefault(t => t.Id == newSectorProduccion.Id).ShouldNotBeNull();
                dbContext.SectoresProduccion.FirstOrDefault(t => t.Id == newSectorProduccion.Id).NroSector.ShouldBeEquivalentTo(input.NroSector);
                dbContext.SectoresProduccion.FirstOrDefault(t => t.Id == newSectorProduccion.Id).Nombre.ShouldBe(input.Nombre);
            }
        }

        //[Fact]
        //public async Task Should_Update_SectorProduccion()
        //{
        //    //Arrange            
        //    var input = new CreateUpdateSectorProduccionDto { CodSectorProduccion = 121102, Id = 1, Nombre = "modificado" };

        //    //Act
        //    var newSectorProduccion = await _sectorProduccionAppService.CreateUpdateSectorProduccionAsync(input);

        //    //Assert
        //    // Se verifican los datos devueltos por el servicio
        //    newSectorProduccion.ShouldNotBeNull();
        //    newSectorProduccion.Id.ShouldBePositive();
        //    // se verifican los datos persistidos por el servicio
        //    using (var uow = _unitOfWorkManager.Begin())
        //    {
        //        var dbContext = await _dbContextProvider.GetDbContextAsync();
        //        dbContext.SectorProduccions.FirstOrDefault(t => t.Id == newSectorProduccion.Id).ShouldNotBeNull();
        //        dbContext.SectorProduccions.FirstOrDefault(t => t.Id == newSectorProduccion.Id).CodSectorProduccion.ShouldBeEquivalentTo(input.CodSectorProduccion);
        //    }
        //}
    }
}

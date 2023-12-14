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

namespace LINCAR_GESTION.Autopartes
{
    public class AutoparteAppService_Test : LINCAR_GESTIONApplicationTestBase
    {
        private readonly IAutoparteAppService _autoparteAppService;
        private readonly IDbContextProvider<LINCAR_GESTIONDbContext> _dbContextProvider;
        private readonly IUnitOfWorkManager _unitOfWorkManager;

        public AutoparteAppService_Test()
        {
            _autoparteAppService = GetRequiredService<IAutoparteAppService>();
            _dbContextProvider = GetRequiredService<IDbContextProvider<LINCAR_GESTIONDbContext>>();
            _unitOfWorkManager = GetRequiredService<IUnitOfWorkManager>();
        }

        [Fact]
        public async Task Should_Get_All_Autopartes()
        {
            //Act
            var autopartes = await _autoparteAppService.GetAutopartesAsync();

            //Assert
            autopartes.ShouldNotBeNull();
            autopartes.Count.ShouldBeGreaterThan(1);
        }

        [Fact]
        public async Task Should_Create_Autoparte()
        {
            //Arrange            
            var input = new CreateUpdateAutoparteDto
            {
                CodAutoparte = 230705,
                Nombre = "Autoparte de prueba"
            };

            //Act
            var newAutoparte = await _autoparteAppService.CreateUpdateAutoparteAsync(input);

            //Assert
            // Se verifican los datos devueltos por el servicio
            newAutoparte.ShouldNotBeNull();
            newAutoparte.Id.ShouldBePositive();
            // se verifican los datos persistidos por el servicio
            using (var uow = _unitOfWorkManager.Begin())
            {
                var dbContext = await _dbContextProvider.GetDbContextAsync();
                dbContext.Autopartes.FirstOrDefault(t => t.Id == newAutoparte.Id).ShouldNotBeNull();
                dbContext.Autopartes.FirstOrDefault(t => t.Id == newAutoparte.Id).CodAutoparte.ShouldBeEquivalentTo(input.CodAutoparte);
                dbContext.Autopartes.FirstOrDefault(t => t.Id == newAutoparte.Id).Nombre.ShouldBe(input.Nombre);
            }
        }

        [Fact]
        public async Task Should_Update_Autoparte()
        {
            //Arrange            
            var input = new CreateUpdateAutoparteDto { CodAutoparte = 121102, Id = 1, Nombre = "modificado" };

            //Act
            var newAutoparte = await _autoparteAppService.CreateUpdateAutoparteAsync(input);

            //Assert
            // Se verifican los datos devueltos por el servicio
            newAutoparte.ShouldNotBeNull();
            newAutoparte.Id.ShouldBePositive();
            // se verifican los datos persistidos por el servicio
            using (var uow = _unitOfWorkManager.Begin())
            {
                var dbContext = await _dbContextProvider.GetDbContextAsync();
                dbContext.Autopartes.FirstOrDefault(t => t.Id == newAutoparte.Id).ShouldNotBeNull();
                dbContext.Autopartes.FirstOrDefault(t => t.Id == newAutoparte.Id).CodAutoparte.ShouldBeEquivalentTo(input.CodAutoparte);
            }
        }
    }
}
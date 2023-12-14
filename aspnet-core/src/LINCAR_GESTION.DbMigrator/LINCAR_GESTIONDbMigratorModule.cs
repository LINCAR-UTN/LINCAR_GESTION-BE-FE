using LINCAR_GESTION.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace LINCAR_GESTION.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(LINCAR_GESTIONEntityFrameworkCoreModule),
    typeof(LINCAR_GESTIONApplicationContractsModule)
    )]
public class LINCAR_GESTIONDbMigratorModule : AbpModule
{
}

using LINCAR_GESTION.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace LINCAR_GESTION;

[DependsOn(
    typeof(LINCAR_GESTIONEntityFrameworkCoreTestModule)
    )]
public class LINCAR_GESTIONDomainTestModule : AbpModule
{

}

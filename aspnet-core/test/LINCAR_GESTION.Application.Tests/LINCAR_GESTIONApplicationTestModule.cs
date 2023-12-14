using Volo.Abp.Modularity;

namespace LINCAR_GESTION;

[DependsOn(
    typeof(LINCAR_GESTIONApplicationModule),
    typeof(LINCAR_GESTIONDomainTestModule)
    )]
public class LINCAR_GESTIONApplicationTestModule : AbpModule
{

}

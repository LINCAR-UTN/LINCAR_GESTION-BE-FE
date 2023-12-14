using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace LINCAR_GESTION;

[Dependency(ReplaceServices = true)]
public class LINCAR_GESTIONBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "LINCAR_GESTION";
}

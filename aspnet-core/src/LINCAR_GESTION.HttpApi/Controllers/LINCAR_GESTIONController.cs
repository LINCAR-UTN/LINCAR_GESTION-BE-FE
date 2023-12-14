using LINCAR_GESTION.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace LINCAR_GESTION.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class LINCAR_GESTIONController : AbpControllerBase
{
    protected LINCAR_GESTIONController()
    {
        LocalizationResource = typeof(LINCAR_GESTIONResource);
    }
}

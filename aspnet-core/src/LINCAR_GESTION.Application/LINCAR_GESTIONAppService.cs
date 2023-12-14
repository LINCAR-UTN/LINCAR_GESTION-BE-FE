using System;
using System.Collections.Generic;
using System.Text;
using LINCAR_GESTION.Localization;
using Volo.Abp.Application.Services;

namespace LINCAR_GESTION;

/* Inherit your application services from this class.
 */
public abstract class LINCAR_GESTIONAppService : ApplicationService
{
    protected LINCAR_GESTIONAppService()
    {
        LocalizationResource = typeof(LINCAR_GESTIONResource);
    }
}

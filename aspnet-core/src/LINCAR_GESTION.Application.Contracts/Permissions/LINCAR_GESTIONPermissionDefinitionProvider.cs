using LINCAR_GESTION.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace LINCAR_GESTION.Permissions;

public class LINCAR_GESTIONPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(LINCAR_GESTIONPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(LINCAR_GESTIONPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<LINCAR_GESTIONResource>(name);
    }
}

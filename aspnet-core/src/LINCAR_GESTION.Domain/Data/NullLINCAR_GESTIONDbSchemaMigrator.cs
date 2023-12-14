using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace LINCAR_GESTION.Data;

/* This is used if database provider does't define
 * ILINCAR_GESTIONDbSchemaMigrator implementation.
 */
public class NullLINCAR_GESTIONDbSchemaMigrator : ILINCAR_GESTIONDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}

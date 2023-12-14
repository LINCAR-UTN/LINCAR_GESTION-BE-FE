using System.Threading.Tasks;

namespace LINCAR_GESTION.Data;

public interface ILINCAR_GESTIONDbSchemaMigrator
{
    Task MigrateAsync();
}

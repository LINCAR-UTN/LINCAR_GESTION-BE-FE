using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using LINCAR_GESTION.Data;
using Volo.Abp.DependencyInjection;

namespace LINCAR_GESTION.EntityFrameworkCore;

public class EntityFrameworkCoreLINCAR_GESTIONDbSchemaMigrator
    : ILINCAR_GESTIONDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreLINCAR_GESTIONDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolve the LINCAR_GESTIONDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<LINCAR_GESTIONDbContext>()
            .Database
            .MigrateAsync();
    }
}

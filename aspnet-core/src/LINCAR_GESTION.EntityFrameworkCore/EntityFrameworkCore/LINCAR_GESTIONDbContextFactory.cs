using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace LINCAR_GESTION.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class LINCAR_GESTIONDbContextFactory : IDesignTimeDbContextFactory<LINCAR_GESTIONDbContext>
{
    public LINCAR_GESTIONDbContext CreateDbContext(string[] args)
    {
        LINCAR_GESTIONEfCoreEntityExtensionMappings.Configure();

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<LINCAR_GESTIONDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new LINCAR_GESTIONDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../LINCAR_GESTION.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}

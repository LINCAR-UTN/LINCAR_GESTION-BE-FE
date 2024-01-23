using LINCAR_GESTION.Atributos;
using LINCAR_GESTION.Autopartes;
using LINCAR_GESTION.EstadosOrdenProduccion;
using LINCAR_GESTION.EstadosOrdenTrabajoAutoparte;
using LINCAR_GESTION.ModelosProducto;
using LINCAR_GESTION.Observaciones;
using LINCAR_GESTION.OrdenesProduccion;
using LINCAR_GESTION.OrdenesTrabajoAutoparte;
using LINCAR_GESTION.Personas;
using LINCAR_GESTION.SectoresProduccion;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.BackgroundJobs.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.Identity;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.OpenIddict.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.TenantManagement;
using Volo.Abp.TenantManagement.EntityFrameworkCore;

namespace LINCAR_GESTION.EntityFrameworkCore;

[ReplaceDbContext(typeof(IIdentityDbContext))]
[ReplaceDbContext(typeof(ITenantManagementDbContext))]
[ConnectionStringName("Default")]
public class LINCAR_GESTIONDbContext :
    AbpDbContext<LINCAR_GESTIONDbContext>,
    IIdentityDbContext,
    ITenantManagementDbContext
{
    /* Add DbSet properties for your Aggregate Roots / Entities here. */

    #region Entities from the modules

    /* Notice: We only implemented IIdentityDbContext and ITenantManagementDbContext
     * and replaced them for this DbContext. This allows you to perform JOIN
     * queries for the entities of these modules over the repositories easily. You
     * typically don't need that for other modules. But, if you need, you can
     * implement the DbContext interface of the needed module and use ReplaceDbContext
     * attribute just like IIdentityDbContext and ITenantManagementDbContext.
     *
     * More info: Replacing a DbContext of a module ensures that the related module
     * uses this DbContext on runtime. Otherwise, it will use its own DbContext class.
     */

    //Identity
    public DbSet<IdentityUser> Users { get; set; }
    public DbSet<IdentityRole> Roles { get; set; }
    public DbSet<IdentityClaimType> ClaimTypes { get; set; }
    public DbSet<OrganizationUnit> OrganizationUnits { get; set; }
    public DbSet<IdentitySecurityLog> SecurityLogs { get; set; }
    public DbSet<IdentityLinkUser> LinkUsers { get; set; }
    public DbSet<IdentityUserDelegation> UserDelegations { get; set; }

    // Tenant Management
    public DbSet<Tenant> Tenants { get; set; }
    public DbSet<TenantConnectionString> TenantConnectionStrings { get; set; }

    #endregion

    #region DB-Sets
    public DbSet<OrdenProduccion> OrdenesProduccion { get; set; }
    public DbSet<EstadoOrdenProduccion> EstadosOrdenProduccion { get; set; }
    public DbSet<Cliente> Clientes { get; set; }
    public DbSet<Empleado> Empleados { get; set; }    
    public DbSet<ModeloProducto> ModelosProducto { get; set; }
    public DbSet<Autoparte> Autopartes { get; set; }
    public DbSet<Atributo> Atributos { get; set; }
    public DbSet<Observacion> Observaciones { get; set; }
    public DbSet<OrdenTrabajoAutoparte> OrdenesTrabajoAutoparte { get; set; }
    public DbSet<EstadoOrdenTrabajoAutoparte> EstadosOrdenTrabajoAutoparte { get; set; }
    public DbSet<SectorProduccion> SectoresProduccion { get; set; }
    #endregion

    public LINCAR_GESTIONDbContext(DbContextOptions<LINCAR_GESTIONDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        /* Include modules to your migration db context */

        builder.ConfigurePermissionManagement();
        builder.ConfigureSettingManagement();
        builder.ConfigureBackgroundJobs();
        builder.ConfigureAuditLogging();
        builder.ConfigureIdentity();
        builder.ConfigureOpenIddict();
        builder.ConfigureFeatureManagement();
        builder.ConfigureTenantManagement();


        /* Configure your own tables/entities inside here */

        //builder.Entity<YourEntity>(b =>
        //{
        //    b.ToTable(LINCAR_GESTIONConsts.DbTablePrefix + "YourEntities", LINCAR_GESTIONConsts.DbSchema);
        //    b.ConfigureByConvention(); //auto configure for the base class props
        //    //...
        //});

        builder.Entity<Cliente>(b =>
        {
            b.ToTable(LINCAR_GESTIONConsts.DbTablePrefix + "Clientes", LINCAR_GESTIONConsts.DbSchema);
            b.ConfigureByConvention();

            //Cliente 1 a * OrdenesProduccion
            b.HasMany(x => x.OrdenesProduccion)
                .WithOne(x => x.Cliente); // FK implicita por EF Core
                                          //.IsRequired();
        });

        builder.Entity<ModeloProducto>(b =>
        {
            b.ToTable(LINCAR_GESTIONConsts.DbTablePrefix + "ModelosProducto", LINCAR_GESTIONConsts.DbSchema);
            b.ConfigureByConvention();

            //ModeloProducto 1 a * OrdenesProduccion
            b.HasMany(x => x.OrdenesProduccion)
                .WithOne(x => x.ModeloProducto); // FK implicita por EF Core
                                                 //.IsRequired();

            // Relación * a * Autoparte definida por convención de EF Core
        });

        builder.Entity<OrdenProduccion>(b =>
        {
            b.ToTable(LINCAR_GESTIONConsts.DbTablePrefix + "OrdenesProduccion", LINCAR_GESTIONConsts.DbSchema);
            b.ConfigureByConvention();

            // Relacion * a * EstadoOrdenProduccion definida por convención en EF Core

            // Relación 0..1 a * OrdenTrabajoAutoparte
            b.HasMany(x => x.OrdenesTrabajoAutoparte)
               .WithOne(x => x.ordenProduccion); // 0..1 -> No isRequired()?

            // relacion con Observacion
            b.HasMany<Observacion>(x => x.Observaciones)
                .WithOne()
                .HasForeignKey("OrdenProduccionId")
                .IsRequired(false);

            // relacion con EstadoOrdenProduccion
            b.HasMany(x => x.Estados)
                .WithOne(x => x.OrdenProduccion);
        });

        builder.Entity<EstadoOrdenProduccion>(b =>
        {
            b.ToTable(LINCAR_GESTIONConsts.DbTablePrefix + "EstadosOrdenProduccion", LINCAR_GESTIONConsts.DbSchema);
            b.ConfigureByConvention();
        });

        builder.Entity<Autoparte>(b =>
        {
            b.ToTable(LINCAR_GESTIONConsts.DbTablePrefix + "Autopartes", LINCAR_GESTIONConsts.DbSchema);
            b.ConfigureByConvention();

            //Relación 1 a * OrdenTrabajoAutopartes
            b.HasMany(x => x.OrdenesTrabajoAutopartes)
                .WithOne(x => x.Autoparte);

            b.HasMany<Atributo>(x => x.Atributos)
               .WithOne()
               .HasForeignKey("AutoparteId")
               .IsRequired(true);


            b.HasMany<Observacion>(x => x.Observaciones)
                .WithOne()
                .HasForeignKey("AutoparteId")
                .IsRequired(false);
            // Relación * a * SectorDeProduccion definida por convención de EF Core
            // Relación * a * ModeloProducto definida por convención de EF Core
        });

        builder.Entity<OrdenTrabajoAutoparte>(b =>
        {
            b.ToTable(LINCAR_GESTIONConsts.DbTablePrefix + "OrdenesTrabajoAutoparte", LINCAR_GESTIONConsts.DbSchema);
            b.ConfigureByConvention();

            //Relación * a * EstadoOrdenTrabajoAutoparte definida por convención en EF Core

            b.HasMany<Observacion>(x => x.Observaciones)
                .WithOne()
                .HasForeignKey("OrdenTrabajoAutoparteId")
                .IsRequired(false);

            // relacion con EstadoOrdenTrabajoAutoparte
            b.HasMany(x => x.Estados)
                .WithOne(x => x.OrdenTrabajoAutoparte);

            // relacion con Encargado Solicitante
            //b.HasOne(x => x.Solicitante)
            //    .WithMany(x => x.OrdenesTrabajoAutoparte);

        });

        builder.Entity<Empleado>(b =>
        {
            b.ToTable(LINCAR_GESTIONConsts.DbTablePrefix + "Empleados", LINCAR_GESTIONConsts.DbSchema);
            b.ConfigureByConvention();

            //Relación 1 a * OrdenTrabajoAutoparte
            b.HasMany(x => x.OrdenesTrabajoAutoparte)
                .WithOne(x => x.Empleado)
                .OnDelete(DeleteBehavior.NoAction);

            //Relación 1 a * SectorProduccion 
            b.HasMany(x => x.SectoresProduccionACargo)
                .WithOne(x => x.Encargado)
                .OnDelete(DeleteBehavior.NoAction);
        });

        builder.Entity<SectorProduccion>(b =>
        {
            b.ToTable(LINCAR_GESTIONConsts.DbTablePrefix + "SectoresProduccion", LINCAR_GESTIONConsts.DbSchema);
            b.ConfigureByConvention();

            //Relación 1 a * Empleados
            b.HasMany(x => x.Empleados)
                .WithMany(x => x.SectorProduccionEmpleado);
        });

        builder.Entity<Atributo>(b =>
        {
            b.ToTable(LINCAR_GESTIONConsts.DbTablePrefix + "Atributos", LINCAR_GESTIONConsts.DbSchema);
            b.ConfigureByConvention();


        });

        /*builder.Entity<Autoparte>(b =>
        {
            b.ToTable(LINCAR_GESTIONConsts.DbTablePrefix + "Autopartes", LINCAR_GESTIONConsts.DbSchema);
            b.ConfigureByConvention();

            //Relación 1 a * OrdenTrabajoAutopartes
            b.HasMany(x => x.OrdenesTrabajoAutopartes)
                .WithOne(x => x.Autoparte);

            b.HasMany<Atributo>(x => x.Atributos)
               .WithOne()
               .HasForeignKey("AutoparteId")
               .IsRequired(true);


            b.HasMany<Observacion>(x => x.Observaciones)
                .WithOne()
                .HasForeignKey("AutoparteId")
                .IsRequired(false);
            // Relación * a * SectorDeProduccion definida por convención de EF Core
            // Relación * a * ModeloProducto definida por convención de EF Core
        });*/





        builder.Entity<Observacion>(b =>
        {
            b.ToTable(LINCAR_GESTIONConsts.DbTablePrefix + "Observaciones", LINCAR_GESTIONConsts.DbSchema);
            b.ConfigureByConvention();
        });


        builder.Entity<EstadoOrdenTrabajoAutoparte>(b =>
        {
            b.ToTable(LINCAR_GESTIONConsts.DbTablePrefix + "EstadosOrdenTrabajoAutoparte", LINCAR_GESTIONConsts.DbSchema);
            b.ConfigureByConvention();
        });
    }
}

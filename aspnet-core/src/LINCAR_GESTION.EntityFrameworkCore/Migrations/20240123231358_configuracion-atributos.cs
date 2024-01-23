using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LINCARGESTION.Migrations
{
    /// <inheritdoc />
    public partial class configuracionatributos : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CodAutoparte",
                table: "AppAtributos",
                type: "int",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CodAutoparte",
                table: "AppAtributos");
        }
    }
}

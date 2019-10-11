using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BloggingSystem.Migrations
{
    public partial class v3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Author",
                table: "Comments",
                nullable: true);

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "ID", "CategoryID", "Content", "LastModified", "PubDate", "Title" },
                values: new object[] { 1, 1, "Hello World", new DateTime(2019, 10, 10, 11, 3, 18, 988, DateTimeKind.Utc).AddTicks(6941), new DateTime(2019, 10, 10, 13, 3, 18, 988, DateTimeKind.Local).AddTicks(8472), "Hello" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Posts",
                keyColumn: "ID",
                keyValue: 1);

            migrationBuilder.DropColumn(
                name: "Author",
                table: "Comments");
        }
    }
}

using Microsoft.EntityFrameworkCore;
using System;

namespace BloggingSystem.Models
{
    public class BlogContext : DbContext
    {
        public BlogContext(DbContextOptions opts) : base(opts)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>()
                .HasMany(c => c.Posts)
                .WithOne(e => e.Category)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);
            modelBuilder.Entity<Post>()
                 .HasMany(c => c.Comments)
                 .WithOne(e => e.Post)
                 .IsRequired()
                 .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Category>().Property(c => c.ID).UseSqlServerIdentityColumn();
            modelBuilder.Entity<Comment>().Property(c => c.ID).UseSqlServerIdentityColumn();
            modelBuilder.Entity<Post>().Property(c => c.ID).UseSqlServerIdentityColumn();

            modelBuilder.Entity<Category>().HasData(
                new Category { CategoryName="Fantasy" , ID=1 },
                new Category { CategoryName="Action" , ID=2 },
                new Category { CategoryName="Tech" , ID=3 }
                );
            modelBuilder.Entity<Post>().HasData(
                new Post { CategoryID = 1, ID = 1, Content = "Hello World", PubDate = DateTime.Now, Title = "Hello" }
                );
        }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}

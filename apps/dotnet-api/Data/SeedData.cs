using DotnetApi.Models;

namespace DotnetApi.Data;

public static class SeedData
{
    public static void Initialize(AppDbContext context)
    {
        if (context.Users.Any())
        {
            return; // Database has been seeded
        }

        var users = new User[]
        {
            new User { Id = 1, Name = "John Doe", Email = "john@example.com", CreatedAt = DateTime.UtcNow },
            new User { Id = 2, Name = "Jane Smith", Email = "jane@example.com", CreatedAt = DateTime.UtcNow },
            new User { Id = 3, Name = "Bob Johnson", Email = "bob@example.com", CreatedAt = DateTime.UtcNow }
        };

        context.Users.AddRange(users);
        context.SaveChanges();
    }
}

using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
    : base(options)
    {
    }
    // DbSets personalizados, se quiser adicionar depois
    public DbSet<Pessoa> Pessoas { get; set; }
}

public class Pessoa
{
    public int Id { get; set; }
    public string Name { get; set; }
}
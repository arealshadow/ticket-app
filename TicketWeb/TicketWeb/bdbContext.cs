using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace TicketWeb
{
    public partial class bdbContext : DbContext
    {
        public bdbContext()
        {
        }

        public bdbContext(DbContextOptions<bdbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Business> Businesses { get; set; }
        public virtual DbSet<BusinessDay> BusinessDays { get; set; }
        public virtual DbSet<BusinessService> BusinessServices { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=.;Initial Catalog=bdb;User ID=SA;Password=<YourStrong@Passw0rd>");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Business>(entity =>
            {
                entity.HasKey(e => e.Idb);

                entity.ToTable("Business");

                entity.Property(e => e.Idb).HasColumnName("IDB");

                entity.Property(e => e.NameBusiness)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsFixedLength(true);

                entity.Property(e => e.Timezone)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsFixedLength(true);
            });

            modelBuilder.Entity<BusinessDay>(entity =>
            {
                entity.HasKey(e => e.IdDayBusiness);

                entity.ToTable("BusinessDay");

                entity.HasOne(d => d.IdBusinessNavigation)
                    .WithMany(p => p.BusinessDays)
                    .HasForeignKey(d => d.IdBusiness)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BusinessDay_Business");
            });

            modelBuilder.Entity<BusinessService>(entity =>
            {
                entity.HasKey(e => e.IdServiceBusiness);

                entity.Property(e => e.ServiceName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsFixedLength(true);

                entity.HasOne(d => d.IdBusinessNavigation)
                    .WithMany(p => p.BusinessServices)
                    .HasForeignKey(d => d.IdBusiness)
                    .HasConstraintName("FK_BusinessServices_Business");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

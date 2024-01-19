using backend.Models;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol;

namespace backend.Data
{
    public class AppContext : DbContext
    {
        public DbSet<Employee> Employees { get; set; } = null!;
        public DbSet<Department> Departments { get; set; } = null!;
        public AppContext(DbContextOptions<AppContext> options)
            : base(options)
        {
            //Console.WriteLine("----  EmployeeContext()");
            //Database.EnsureDeleted();
            //Console.WriteLine("----  EmployeeContext()  2 ----");
            //Database.EnsureCreated();   // создаем базу данных при первом обращении




        }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    Console.WriteLine("----  OnModelCreating");
        //    Department softwareDep = new Department { Id = 1, Name = "Software development department" };
        //    Department infoSecurityDep = new Department { Id = 2, Name = "Information security department" };

        //    Employee ivanovRA = new Employee
        //    {
        //        Id = 1,
        //        FirstName = "Roman",
        //        SecondName = "Ivanov",
        //        Surname = "Anatolevich",
        //        Birthday = DateTime.Today,
        //        EmploymentDate = DateTime.Today,
        //        //Department = softwareDep,
        //        DepartmentId = softwareDep.Id
        //    };
        //    Employee petrovIV = new Employee
        //    {
        //        Id = 2,
        //        FirstName = "Ivan",
        //        SecondName = "Petrov",
        //        Surname = "Vasilevich",
        //        Birthday = DateTime.Today,
        //        EmploymentDate = DateTime.Today,
        //        //Department = infoSecurityDep,
        //        DepartmentId = infoSecurityDep.Id
        //    };
        //    Employee grachevIV = new Employee
        //    {
        //        Id = 3,
        //        FirstName = "Ilya",
        //        SecondName = "Grachev",
        //        Surname = "Vasilevich",
        //        Birthday = DateTime.Today,
        //        EmploymentDate = DateTime.Today,
        //        //Department = infoSecurityDep,
        //        DepartmentId = infoSecurityDep.Id
        //    };

        //    modelBuilder.Entity<Department>().HasData(softwareDep, infoSecurityDep);
        //    modelBuilder.Entity<Employee>().HasData(ivanovRA, petrovIV, grachevIV);

        //    //modelBuilder.Entity<Department>().SaveChanges();

        //    Console.WriteLine("modelBuilder.Entity<Employee>().ToJson()");
        //    Console.WriteLine("---- 1: " + modelBuilder.Entity<Employee>().Metadata);
        //}
    }
}

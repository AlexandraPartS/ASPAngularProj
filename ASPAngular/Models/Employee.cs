using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Employee
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; init; }

        public string FirstName { get; set; } = null!;
        public string SecondName { get; set; } = null!;
        public string? Surname { get; set; }

        [Column(TypeName = "date")]
        public DateTime Birthday { get; set; }
        [Column(TypeName = "date")]
        public DateTime EmploymentDate { get; set; }
        public double Salary { get; set; }

        public Department Department { get; set; }
        public int DepartmentId { get; set; }    

    }
}

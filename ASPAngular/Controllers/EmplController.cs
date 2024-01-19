using Microsoft.AspNetCore.Mvc;
using backend.Data;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/empl")]
    public class EmplController : Controller
    {
        Data.AppContext db;
        public EmplController(Data.AppContext appContext)
        {
            db = appContext;
        }

        // GET: api/empl
        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            return db.Employees.ToList();
        }

        // GET: api/empl/5
        [HttpGet("{id}")]
        public Employee Get(int id)
        {
            Employee employee = db.Employees.FirstOrDefault(x => x.Id == id);
            return employee;
        }

        // POST: api/empl
        [HttpPost]
        public IActionResult Post(Employee employee)
        {
            if (ModelState.IsValid)
            {
                db.Employees.Add(employee);
                db.SaveChanges();
                return Ok(employee);
            }
            return BadRequest(ModelState);
        }

        // PUT: api/empl/5
        [HttpPut]
        public IActionResult Put(Employee employee)
        {
            if (ModelState.IsValid)
            {
                db.Update(employee);
                db.SaveChanges();
                return Ok(employee);
            }
            return BadRequest(ModelState);
        }

        // DELETE: api/empl/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Employee employee = db.Employees.FirstOrDefault(x => x.Id == id);
            if (employee != null)
            {
                db.Employees.Remove(employee);
                db.SaveChanges();
            }
            return Ok(employee);
        }

        //protected override void Dispose(bool disposing)
        //{
        //    _userService.Dispose();
        //    base.Dispose(disposing);
        //}
    }
}


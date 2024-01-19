using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder();


//Services
builder.Services.AddDbContext<backend.Data.AppContext>(opt => opt.UseNpgsql(builder.Configuration.GetConnectionString("Connection")));
builder.Services.AddControllers();
builder.Services.AddSpaStaticFiles(configuration =>
{
    configuration.RootPath = "ClientApp/dist";
});



var app = builder.Build();



//Middlewares
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    //app.Run(async (context) => await context.Response.WriteAsync("In Development Stage"));
}
app.UseStaticFiles();
if ((!app.Environment.IsDevelopment()))
{
    app.UseSpaStaticFiles();
    //app.Run(async (context) => await context.Response.WriteAsync("In Production Stage"));
}
app.UseRouting();
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
    endpoints.Map("/qw", (backend.Data.AppContext db) => db.Employees.ToList());

});

app.UseSpa(spa =>
{
    spa.Options.SourcePath = "ClientApp";

    if (app.Environment.IsDevelopment())
    {
        //spa.Options.StartupTimeout = new TimeSpan(0, 0, 30);
        spa.UseAngularCliServer(npmScript: "start");
    }
});

Console.WriteLine($"Angular project^   {app.Environment.EnvironmentName}");

app.Run();


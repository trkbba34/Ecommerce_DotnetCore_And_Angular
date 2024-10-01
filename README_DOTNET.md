dotnet new sln
dotnet new webapi -o API -controllers 
dotnet new classlib -o Core 
dotnet new classlib -o Infrastructure
dotnet sln add API
dotnet sln add Core
dotnet sln add Infrastructure
cd API
dotnet add reference ../Infrastructure
cd ..
cd Infrastructure
dotnet add reference ../Core
dotnet restore
dotnet build
cd API
dotnet run
dotnet watch

"Server=localhost,1433;Database=ecommerce;User Id=SA;Password=azeazeaze;TrustServerCertificate=True"
builder.Services.AddDbContext<StoreContext>(opt =>
{
    opt.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});
dotnet ef migrations add InitialCreate -s API -p Infrastructure
dotnet ef database drop -p Infrastructure -s API
dotnet ef database update -s API -p Infrastructure

- shotcut:
prop : for property
ctror: for constructor

private: only accessible inside the class it self
protected: like private + in any classes that derive


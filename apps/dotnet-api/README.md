# .NET API

A modern .NET 8 Web API application with Entity Framework Core and Swagger documentation.

## Features

- 🚀 **.NET 8** - Latest .NET with minimal APIs
- 🗄️ **Entity Framework Core** - In-memory database with code-first migrations
- 📚 **Swagger/OpenAPI** - Interactive API documentation
- 🔄 **CORS Support** - Cross-origin resource sharing enabled
- 🏗️ **Clean Architecture** - Controllers, Services, and Data layers
- 📊 **Logging** - Structured logging with ILogger
- ✅ **Validation** - Model validation and error handling

## API Endpoints

### Health Check
- `GET /api/health` - API health status

### Users
- `GET /api/users` - Get all users
- `GET /api/users/{id}` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/{id}` - Update user
- `DELETE /api/users/{id}` - Delete user

## Development

```bash
# Install dependencies (if using npm scripts)
npm install

# Run the application
npm run dev
# or
dotnet run

# Build the application
npm run build
# or
dotnet build

# Run tests
npm run test
# or
dotnet test

# Clean build artifacts
npm run clean
# or
dotnet clean

# Publish for production
npm run publish
# or
dotnet publish -c Release -o ./publish
```

## Configuration

The application uses:
- **Port:** 5000 (HTTP) / 7000 (HTTPS)
- **Database:** In-memory Entity Framework database
- **CORS:** Enabled for all origins (development only)
- **Swagger:** Available at `/swagger` in development

## Environment Variables

- `ASPNETCORE_ENVIRONMENT` - Environment (Development/Production)
- `ConnectionStrings__DefaultConnection` - Database connection string

## Data Models

### User
- `Id` (int) - Primary key
- `Name` (string) - User's full name
- `Email` (string) - User's email address (unique)
- `CreatedAt` (DateTime) - Creation timestamp

## Dependencies

- Microsoft.AspNetCore.OpenApi
- Swashbuckle.AspNetCore
- Microsoft.EntityFrameworkCore.InMemory

# Go API

A simple HTTP API server built with Go.

## Features

- Health check endpoint
- User management API
- JSON responses
- CORS support ready

## Endpoints

- `GET /` - API information
- `GET /health` - Health check
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user
- `GET /api/users/{id}` - Get user by ID

## Development

```bash
# Run the server
go run main.go

# Build the binary
go build -o api main.go

# Run tests
go test ./...
```

## Environment Variables

- `PORT` - Server port (default: 8080)

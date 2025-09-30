# React Client

A modern React application built with Vite, TypeScript, and React Router.

## Features

- ⚡ **Vite** - Lightning fast development server
- ⚛️ **React 18** - Latest React with hooks and concurrent features
- 🔷 **TypeScript** - Type-safe development
- 🛣️ **React Router** - Client-side routing
- 🌐 **Axios** - HTTP client for API calls
- 🎨 **Modern CSS** - Beautiful gradients and animations
- 🔗 **API Integration** - Connected to Go API backend

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Type check
npm run check-types
```

## Environment Variables

Create a `.env` file in the app directory:

```env
VITE_API_URL=http://localhost:8080
```

## Pages

- **Home** (`/`) - Welcome page with API health check
- **Users** (`/users`) - User management interface

## API Integration

The app connects to the Go API backend and provides:
- Health check monitoring
- User CRUD operations
- Real-time data fetching

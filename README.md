# my-better-t-app

This project was created with [Better-T-Stack](https://github.com/better-t-stack/Better-T-Stack), a modern TypeScript stack that combines React, TanStack Router, Hono, tRPC, and more.

## Features

- **TypeScript** - For type safety and improved developer experience
- **TanStack Router** - File-based routing with full type safety
- **TailwindCSS** - Utility-first CSS for rapid UI development
- **shadcn/ui** - Reusable UI components
- **Hono** - Lightweight, performant server framework
- **tRPC** - End-to-end type-safe APIs
- **Drizzle** - TypeScript-first ORM
- **SQLite/Turso** - Database engine
- **Authentication** - Email & password authentication with Better Auth

## Getting Started

First, install the dependencies:

```bash
bun install
```

## Database Setup

This project uses SQLite with Drizzle ORM.

1. Start the local SQLite database:
```bash
cd packages/server && bun db:local
```

2. Update your `.env` file in the `packages/server` directory with the appropriate connection details if needed.

4. Apply the schema to your database:
```bash
bun db:push
```


Then, run the development server:

```bash
bun dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser to see the client application.
The API is running at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
my-better-t-app/
├── packages/
│   ├── client/         # Frontend application (React, TanStack Router)
│   └── server/         # Backend API (Hono, tRPC)
```

## Available Scripts

- `bun dev`: Start both client and server in development mode
- `bun build`: Build both client and server
- `bun dev:client`: Start only the client
- `bun dev:server`: Start only the server
- `bun check-types`: Check TypeScript types across all packages
- `bun db:push`: Push schema changes to database
- `bun db:studio`: Open database studio UI
- `cd packages/server && bun db:local`: Start the local SQLite database
- `cd packages/server && bun auth:generate`: Generate authentication schema

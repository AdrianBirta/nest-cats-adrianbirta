# Project Nest REST API - Neon, Prisma, and Nest.js

This project utilizes Neon, a Serverless Postgres environment, along with Prisma for database schema management and Nest.js for the backend framework. Below is a breakdown of the project structure, including key files and their functionalities.

## Project Structure

### `schema.prisma`

The `schema.prisma` file defines the database schema using Prisma's schema language. It specifies models, enums, and their relationships.

### `migration.sql`

The `migration.sql` file contains SQL queries for creating enums, tables, and indexes based on the Prisma schema. It's useful for manual database migrations.

### `auth.service.ts` & `auth.controller.ts`

These files handle user authentication and authorization logic. `AuthService` provides methods for user authentication, registration, and fetching user data. `AuthController` defines API endpoints for user authentication, registration, and user listing.

### `cats.service.ts` & `cats.controller.ts`

These files manage CRUD operations for a hypothetical `Cat` entity. `CatsService` handles business logic related to cats, such as creating, fetching, updating, and deleting cat records. `CatsController` exposes RESTful endpoints for interacting with cat data.

### `database.service.ts`

The `DatabaseService` class extends PrismaClient and initializes database connection. It's used by service classes to interact with the database.

### `app.module.ts`

The `AppModule` orchestrates the application by importing and configuring various modules. It includes modules for cats, database, authentication, and core functionalities.

### `.env`

The `.env` file contains environment variables used in the application, including the `DATABASE_URL` for connecting to the PostgreSQL database.

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Set up your PostgreSQL database and configure the `DATABASE_URL` in the `.env` file.
4. Run database migrations: `npx prisma migrate dev`.
5. Start the application: `npm run start`.

## Additional Notes

- Make sure to replace placeholder values in the `.env` file with your actual database credentials.
- Ensure that the necessary dependencies are installed before running the application.

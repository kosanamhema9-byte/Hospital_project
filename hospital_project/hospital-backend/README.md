# Hospital Backend (Node.js + Express + MongoDB)

## Setup
1. Copy `.env.example` to `.env` and fill your `MONGO_URI`.
2. Install dependencies:
   ```
   npm install
   ```
3. Run:
   ```
   npm run dev
   ```
4. API endpoints:
   - `POST /api/auth/register` register user
   - `POST /api/auth/login` login
   - `CRUD` for patients: `/api/patients`
   - `CRUD` for doctors: `/api/doctors`
   - `CRUD` for appointments: `/api/appointments`

This backend uses Mongoose for MongoDB models.

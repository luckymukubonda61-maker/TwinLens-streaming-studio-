# TwinLens Streaming Studio

**Two Minds, One Brand.**

A web-first live production platform foundation built with Next.js, TypeScript, Prisma and PostgreSQL.

## Included in this foundation

- TwinLens black, gold and white landing page
- Registration and login using hashed passwords
- Signed, HTTP-only session cookies
- Protected dashboard
- Broadcast workspace creation and listing
- PostgreSQL Prisma schema
- Health endpoint
- Render Blueprint configuration

## Not yet implemented

The studio interface is a foundation, not a working media transport yet. LiveKit/WebRTC rooms, RTMP output, cloud recording, media processing, AI editing, social destination OAuth and billing need dedicated implementation and provider credentials.

## Requirements

- Node.js 20.9 or newer
- npm
- PostgreSQL 14 or newer

## Local setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy environment template:

   ```bash
   cp .env.example .env
   ```

3. Create a PostgreSQL database and set `DATABASE_URL` in `.env`.

4. Set `SESSION_SECRET` to a random secret of at least 32 characters.

5. Generate Prisma client and create the initial migration:

   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

6. Start the development server:

   ```bash
   npm run dev
   ```

7. Open http://localhost:3000.

## API endpoints

- `GET /api/health` — service health
- `POST /api/auth/register` — create account
- `POST /api/auth/login` — sign in
- `POST /api/auth/logout` — clear session
- `GET /api/broadcasts` — list the signed-in user's broadcasts
- `POST /api/broadcasts` — create a broadcast workspace

## Deploy to Render

1. Push this project to a GitHub repository you control.
2. In Render, choose **New → Blueprint** and connect the repository.
3. Render reads `render.yaml` and proposes the web service and PostgreSQL database.
4. Review the selected database and service plans and expected charges before applying.
5. Apply the Blueprint and wait for the build and health check.
6. Visit the generated `onrender.com` URL and register your first account.

The Blueprint uses Render's internal database connection string. Keep `SESSION_SECRET` private and never commit `.env`.

### Deployment note

The build command runs `prisma migrate deploy` before the Next.js build. For larger production deployments, move migrations into a controlled release step and use backward-compatible migration practices.

## Ownership and operations

- Keep the Git repository in an account you control.
- Keep Render, database, domain, storage and provider accounts in your ownership.
- Use separate development and production secrets.
- Configure backups and test restores.
- Do not store video recordings on the web service filesystem; use object storage.
- Add rate limiting, email verification, password reset, CSRF/origin protections, account deletion/export, monitoring and security review before public commercial launch.

## License

Private project. Add your chosen license before distributing the source.

# Buffoon

Buffoon is an agent orchestration platform that provisions sandbox containers, coordinates FastAPI services, and surfaces results through a Next.js dashboard built with the Geist design system.

## Architecture

- **Frontend**: Next.js 13 + TypeScript UI using Geist components for accessible, responsive layouts.
- **Backend**: FastAPI application with structured logging, background task execution, and in-memory repositories for the MVP.
- **Sandbox**: Python 3.11 container that simulates agent execution and writes structured JSON artifacts.
- **Shared packages**: Reusable TypeScript utility and type packages for consistent client/server contracts.

## Getting Started

1. Copy `.env.example` to `.env` and adjust values as required.
2. Install dependencies and run the development stack:

   ```bash
   npm --prefix frontend install
   pip install -r backend/requirements.txt
   uvicorn backend.main:app --reload
   npm --prefix frontend run dev
   ```

   Or start everything using Docker Compose:

   ```bash
   ./scripts/dev.sh
   ```

## API Overview

- `GET /health/` — health check endpoint.
- `POST /tasks` — queue a new task for sandbox execution.
- `GET /tasks` — list all tasks with their current statuses.
- `GET /tasks/{task_id}` — inspect an individual task.
- `GET /agents` — fetch agent runtime state and logs.
- `GET /agents/{agent_id}` — inspect a single agent session.

## Frontend Pages

- `/` — hero page with quick task submission.
- `/tasks` — console with live task list and agent dashboards.
- `/agents/[agentId]` — detailed view for an agent session with VNC endpoint metadata.

## Scripts

- `scripts/dev.sh` — run docker-compose dev stack with live reload.
- `scripts/build.sh` — build production images.
- `scripts/deploy.sh` — launch the stack in detached mode.

## Licensing & Attribution

- Donations: ETH/BSC `0xBFD25B75E9a742cEC6ea68D06d631f6EF14Cfa82`, TRX `TRat8qcN5zBQL11SMYWpQKD3EGJacMMy2m`, BTC `bc1qww4ky9sj90k93amwmmsulx2hnvlt9fvktw9d05`
- Copyright: [https://t.me/likhonsheikh](https://t.me/likhonsheikh)

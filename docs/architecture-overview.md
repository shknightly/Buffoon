# Buffoon Platform Architecture Overview

## Purpose
This document summarizes the current Buffoon repository structure and highlights how the frontend, backend, and sandbox layers collaborate to execute multi-agent workloads end to end.

## Core Layers

### Frontend (Next.js + Geist UI)
- Located under `frontend/` with reusable components in `src/components` and pages in `src/pages`.
- The landing page (`src/pages/index.tsx`) introduces Buffoon, links to the live task console, and embeds the `TaskForm` so users can queue automations directly from the hero section.【F:frontend/src/pages/index.tsx†L1-L29】
- `TaskForm.tsx` validates task descriptions, sends them to the backend via `submitTask`, and provides accessible status/error messaging through Geist UI primitives.【F:frontend/src/components/TaskForm.tsx†L1-L79】

### Backend (FastAPI Orchestrator)
- Implemented inside `backend/` with the FastAPI application configured in `main.py` and modular routers under `buffoon/routers`.
- The application exposes health, agent, and task routes, relying on permissive CORS for local development so the Next.js client can interact without proxying.【F:backend/main.py†L1-L22】
- Planned orchestration services live in `buffoon/services`, where the sandbox manager and planner will coordinate container lifecycles and agent assignment.

### Sandbox (Ephemeral Agent Runtime)
- Container build assets and execution scripts live in `sandbox/`.
- `agent_runner.py` writes a structured JSON result to the path referenced by `BUFFOON_RESULT_PATH`, demonstrating how isolated containers can report completion metadata back to the backend orchestrator.【F:sandbox/agent_runner.py†L1-L29】
- Tooling, configuration, and entrypoint scripts (`entrypoint.sh`, `config/`, `tools/`) prepare the sandbox for browser, filesystem, and shell operations as the agent feature set expands.

## Cross-Cutting Behavior
- Docker Compose definitions (`docker-compose.yml`, `docker-compose.dev.yml`) orchestrate the three layers locally so developers can iterate on the UI while exercising the FastAPI routes and sandbox flow.
- Shared packages under `packages/` are ready to hold cross-layer TypeScript utilities and type definitions for consistent payload contracts.

## Roadmap Alignment
- The current codebase already covers large portions of the MVP checklist outlined in the Buffoon plan: a task submission UI, a backend entrypoint, and a sandbox runner that persists results. Future work will focus on wiring WebSocket streaming, expanding tool registries, and implementing the planner logic that enables hierarchical agent teams.


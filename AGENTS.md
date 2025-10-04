
├── apps/
│   ├── frontend/
│   │   ├── package.json
│   │   ├── next.config.js
│   │   └── src/
│   │       ├── pages/
│   │       │   ├── index.tsx
│   │       │   ├── tasks.tsx
│   │       │   ├── agents/[agentId].tsx
│   │       └── components/
│   │           ├── TaskForm.tsx
│   │           ├── AgentConsole.tsx
│   │           └── VNCViewer.tsx
│   │
│   ├── backend/
│   │   ├── pyproject.toml / requirements.txt
│   │   ├── main.py or app.py
│   │   ├── buffoon/
│   │   │   ├── __init__.py
│   │   │   ├── routers/
│   │   │   │   ├── tasks.py
│   │   │   │   ├── agents.py
│   │   │   │   └── health.py
│   │   │   ├── services/
│   │   │   │   ├── sandbox_manager.py
│   │   │   │   └── agent_planner.py
│   │   │   ├── schemas/
│   │   │   │   ├── TaskRequest.py
│   │   │   │   └── AgentState.py
│   │   │   └── models/  # if using DB
│   │   └── backend_utils/
│   │       └── logger.py
│   │
│   └── sandbox/
│       ├── Dockerfile
│       ├── entrypoint.sh
│       ├── agent_runner.py
│       ├── cdp_client.py / playwright_runner.py
│       ├── tools/
│       │   ├── browser/
│       │   │   ├── navigate.py
│       │   │   ├── extract.py
│       │   │   └── click.py
│       │   ├── file/
│       │   │   ├── read.py
│       │   │   └── write.py
│       │   └── shell/
│       │       ├── execute.py
│       │       └── list_dir.py
│       ├── storage/
│       │   └── sessions/     # persistent agent state if needed
│       └── config/
│           ├── sandbox_config.yaml
│           └── tool_registry.json
│
├── packages/
│   ├── shared-types/
│   │   ├── package.json
│   │   ├── index.ts
│   │   └── agent.ts
│   └── utilities/
│       ├── package.json
│       ├── logger.ts
│       └── helpers.ts
│
├── docker-compose.yml
├── docker-compose.dev.yml
├── .env.example
├── scripts/
│   ├── dev.sh
│   ├── build.sh
│   └── deploy.sh
└── README.md


---

🧩 Technology Choices (Buffoon Plan)

Frontend: Next.js with TypeScript

Backend: FastAPI (good async support)

Agent Engine: either CDP or Playwright

Sandboxing: Docker containers (one container per agent)

Communication: WebSockets between frontend ↔ backend; backend ↔ sandbox

Streaming / UI: Use noVNC or WebRTC or periodic screenshots via WebSocket

State / Queues: Redis or RabbitMQ + Postgres (or Mongo)



---

🎬 First Milestone (MVP) Tasks

1. Scaffold monorepo and initialize git


2. Build a simple Next.js UI “Submit Task” screen


3. Build backend route POST /tasks that accepts a task string


4. Sandbox container minimal: logs “agent running task X”


5. Backend launches the sandbox container with task payload


6. Frontend shows a status page (pending / running / done)


7. Once container finishes, it writes a JSON result; backend collects it and shows to UI



That MVP doesn’t do real browsing yet — it ensures the pipeline is wired.


---

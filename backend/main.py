from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from buffoon.routers import agents, health, tasks

app = FastAPI(title="Buffoon Backend", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router)
app.include_router(tasks.router)
app.include_router(agents.router)


@app.get("/", tags=["meta"])
async def root():
    return {"message": "Buffoon backend is online"}

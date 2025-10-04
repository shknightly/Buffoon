from __future__ import annotations

from fastapi import APIRouter, HTTPException, status

from ..schemas.AgentState import AgentState
from ..services.agent_state_store import get_agent_state_store

router = APIRouter(prefix="/agents", tags=["agents"])


@router.get("/", response_model=list[AgentState])
async def list_agents() -> list[AgentState]:
    store = get_agent_state_store()
    state_map = await store.list()
    return list(state_map.values())


@router.get("/{agent_id}", response_model=AgentState)
async def get_agent(agent_id: str) -> AgentState:
    store = get_agent_state_store()
    state = await store.get(agent_id)
    if not state:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Agent not found")
    return state

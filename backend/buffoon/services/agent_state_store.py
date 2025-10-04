from __future__ import annotations

import asyncio
import time
from typing import Dict, Optional

from ..schemas.AgentState import AgentLogEntry, AgentState
from ..schemas.TaskRequest import TaskStatus


class AgentStateStore:
    def __init__(self) -> None:
        self._states: Dict[str, AgentState] = {}
        self._lock = asyncio.Lock()

    async def upsert(self, agent_id: str, task_id: str, status: TaskStatus, message: str) -> AgentState:
        async with self._lock:
            state = self._states.get(agent_id)
            log_entry = AgentLogEntry(timestamp=time.time(), message=message)
            if state:
                next_progress = 1.0 if status == TaskStatus.COMPLETED else min(1.0, state.progress + 0.34)
                updated = state.model_copy(
                    update={
                        "status": status,
                        "logs": [*state.logs, log_entry],
                        "progress": next_progress,
                    }
                )
                self._states[agent_id] = updated
                return updated
            new_state = AgentState(
                agentId=agent_id,
                taskId=task_id,
                status=status,
                progress=0.1,
                logs=[log_entry],
                vncUrl=f"http://localhost:6080/{agent_id}",
            )
            self._states[agent_id] = new_state
            return new_state

    async def get(self, agent_id: str) -> Optional[AgentState]:
        async with self._lock:
            return self._states.get(agent_id)

    async def list(self) -> Dict[str, AgentState]:
        async with self._lock:
            return dict(self._states)


def get_agent_state_store() -> AgentStateStore:
    if not hasattr(get_agent_state_store, "_instance"):
        get_agent_state_store._instance = AgentStateStore()
    return get_agent_state_store._instance  # type: ignore[attr-defined]

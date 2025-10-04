from __future__ import annotations

from typing import List, Optional

from pydantic import BaseModel, Field

from .TaskRequest import TaskStatus


class AgentLogEntry(BaseModel):
    timestamp: float
    message: str


class AgentState(BaseModel):
    agentId: str
    taskId: str
    status: TaskStatus
    progress: float = Field(ge=0.0, le=1.0)
    vncUrl: Optional[str] = None
    logs: List[AgentLogEntry] = Field(default_factory=list)

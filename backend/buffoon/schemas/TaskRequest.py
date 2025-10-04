from __future__ import annotations

import enum
from typing import Optional

from pydantic import BaseModel, Field


class TaskStatus(str, enum.Enum):
    PENDING = "pending"
    RUNNING = "running"
    COMPLETED = "completed"
    FAILED = "failed"


class TaskRequest(BaseModel):
    description: str = Field(..., min_length=5, max_length=2_000)


class TaskResponse(TaskRequest):
    id: str
    agentId: str
    status: TaskStatus
    createdAt: str
    updatedAt: str
    result: Optional[str] = None
    error: Optional[str] = None

    class Config:
        json_schema_extra = {
            "example": {
                "id": "1b2d3f",
                "agentId": "agent-1b2d3f",
                "description": "Collect the latest FastAPI release notes.",
                "status": TaskStatus.RUNNING,
                "createdAt": "2024-01-01T00:00:00+00:00",
                "updatedAt": "2024-01-01T00:00:00+00:00",
            }
        }

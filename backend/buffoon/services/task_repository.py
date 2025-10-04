from __future__ import annotations

import asyncio
import uuid
from datetime import datetime, timezone
from typing import Dict, List, Optional

from ..schemas.TaskRequest import TaskResponse, TaskStatus


def _timestamp() -> str:
    return datetime.now(timezone.utc).isoformat()


class TaskRepository:
    """In-memory task persistence for the MVP."""

    def __init__(self) -> None:
        self._tasks: Dict[str, TaskResponse] = {}
        self._lock = asyncio.Lock()

    async def create_task(self, description: str) -> TaskResponse:
        async with self._lock:
            task_id = str(uuid.uuid4())
            now = _timestamp()
            task = TaskResponse(
                id=task_id,
                agentId=f"agent-{task_id[:8]}",
                description=description,
                status=TaskStatus.PENDING,
                createdAt=now,
                updatedAt=now,
            )
            self._tasks[task_id] = task
            return task

    async def update_task(self, task_id: str, **changes: object) -> Optional[TaskResponse]:
        async with self._lock:
            task = self._tasks.get(task_id)
            if task is None:
                return None
            updated = task.model_copy(update={**changes, "updatedAt": _timestamp()})
            self._tasks[task_id] = updated
            return updated

    async def list_tasks(self) -> List[TaskResponse]:
        async with self._lock:
            return list(self._tasks.values())

    async def get_task(self, task_id: str) -> Optional[TaskResponse]:
        async with self._lock:
            return self._tasks.get(task_id)


def get_task_repository() -> TaskRepository:
    """Singleton-style accessor to keep shared state during development."""
    if not hasattr(get_task_repository, "_instance"):
        get_task_repository._instance = TaskRepository()
    return get_task_repository._instance  # type: ignore[attr-defined]

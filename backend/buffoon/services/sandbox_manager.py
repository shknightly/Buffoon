from __future__ import annotations

import asyncio
import random
import time
from typing import AsyncIterator

from fastapi import BackgroundTasks

from ..backend_utils.logger import structured_log
from ..schemas.TaskRequest import TaskResponse, TaskStatus
from .agent_planner import get_planner
from .agent_state_store import get_agent_state_store
from .task_repository import TaskRepository


class SandboxManager:
    """Coordinates background execution of sandboxed tasks."""

    def __init__(self, repository: TaskRepository) -> None:
        self._repository = repository
        self._agent_states = get_agent_state_store()

    async def launch(self, task: TaskResponse, background_tasks: BackgroundTasks) -> None:
        background_tasks.add_task(self._run_plan, task.id, task.agentId, task.description)

    async def _run_plan(self, task_id: str, agent_id: str, description: str) -> None:
        planner = get_planner()
        plan = planner.build_plan(description)
        await self._repository.update_task(task_id, status=TaskStatus.RUNNING)
        await self._agent_states.upsert(agent_id, task_id, TaskStatus.RUNNING, "Sandbox bootstrapped")
        structured_log("Sandbox started", task_id=task_id, steps=len(plan))

        async for progress, message in self._simulate_execution(plan):
            status = TaskStatus.COMPLETED if progress >= 1.0 else TaskStatus.RUNNING
            await self._repository.update_task(
                task_id,
                result=message if status == TaskStatus.COMPLETED else None,
                status=status,
            )
            await self._agent_states.upsert(agent_id, task_id, status, message)
            structured_log("Sandbox heartbeat", task_id=task_id, progress=progress, message=message)

    async def _simulate_execution(self, steps: list[str]) -> AsyncIterator[tuple[float, str]]:
        for index, step in enumerate(steps, start=1):
            await asyncio.sleep(random.uniform(0.2, 0.6))
            yield index / len(steps), f"{step} completed at {time.strftime('%X')}"


def get_sandbox_manager(repository: TaskRepository) -> SandboxManager:
    if not hasattr(get_sandbox_manager, "_instance"):
        get_sandbox_manager._instance = SandboxManager(repository)
    return get_sandbox_manager._instance  # type: ignore[attr-defined]

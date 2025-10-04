from __future__ import annotations

from fastapi import APIRouter, BackgroundTasks, HTTPException, status

from ..schemas.TaskRequest import TaskRequest, TaskResponse
from ..services.sandbox_manager import get_sandbox_manager
from ..services.task_repository import get_task_repository

router = APIRouter(prefix="/tasks", tags=["tasks"])


@router.get("/", response_model=list[TaskResponse])
async def list_tasks() -> list[TaskResponse]:
    repository = get_task_repository()
    return await repository.list_tasks()


@router.get("/{task_id}", response_model=TaskResponse)
async def get_task(task_id: str) -> TaskResponse:
    repository = get_task_repository()
    task = await repository.get_task(task_id)
    if not task:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Task not found")
    return task


@router.post("/", response_model=TaskResponse, status_code=status.HTTP_201_CREATED)
async def create_task(request: TaskRequest, background_tasks: BackgroundTasks) -> TaskResponse:
    repository = get_task_repository()
    task = await repository.create_task(request.description)
    manager = get_sandbox_manager(repository)
    await manager.launch(task, background_tasks)
    return task

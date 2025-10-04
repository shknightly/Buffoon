import useSWR, { mutate } from 'swr';

export interface TaskResponse {
  id: string;
  description: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  createdAt: string;
  updatedAt: string;
  agentId: string;
  result?: string;
  error?: string;
}

const API_BASE = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:8000';

const fetcher = async <T>(path: string): Promise<T> => {
  const response = await fetch(`${API_BASE}${path}`);
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return response.json() as Promise<T>;
};

export const useTasks = () => useSWR<TaskResponse[]>(`/tasks`, path => fetcher<TaskResponse[]>(path));

export const useTask = (taskId?: string) => {
  const shouldFetch = taskId ? `/tasks/${taskId}` : null;
  return useSWR<TaskResponse | null>(shouldFetch, path => fetcher<TaskResponse>(path));
};

export const submitTask = async (description: string) => {
  const response = await fetch(`${API_BASE}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ description })
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || 'Task submission failed');
  }

  const data = (await response.json()) as TaskResponse;
  await mutate('/tasks');
  return data;
};

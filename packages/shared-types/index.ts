export type TaskStatus = 'pending' | 'running' | 'completed' | 'failed';

export interface Task {
  id: string;
  agentId: string;
  description: string;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
  result?: string;
  error?: string;
}

export interface AgentState {
  agentId: string;
  taskId: string;
  status: TaskStatus;
  progress: number;
  vncUrl?: string;
  logs: { timestamp: number; message: string }[];
}

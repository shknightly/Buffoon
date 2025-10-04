import type { AgentState } from './index';

export const isAgentComplete = (agent: AgentState): boolean => agent.status === 'completed';

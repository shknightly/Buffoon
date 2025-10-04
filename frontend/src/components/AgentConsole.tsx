import { Card, Code, Dot, Grid, Spacer, Text } from '@geist-ui/core';
import { TaskResponse } from '../utils/api';

interface AgentConsoleProps {
  task: TaskResponse;
}

const statusColor: Record<TaskResponse['status'], 'success' | 'warning' | 'secondary' | 'error'> = {
  completed: 'success',
  failed: 'error',
  pending: 'warning',
  running: 'secondary'
};

const statusLabel: Record<TaskResponse['status'], string> = {
  completed: 'Completed',
  failed: 'Failed',
  pending: 'Pending',
  running: 'Running'
};

export default function AgentConsole({ task }: AgentConsoleProps) {
  return (
    <Card className="status-card" shadow type="dark" aria-live="polite">
      <Grid.Container gap={0.5} alignItems="center">
        <Grid xs={24}>
          <Text h3>{task.description}</Text>
        </Grid>
        <Grid xs={24}>
          <Dot type={statusColor[task.status]}>{statusLabel[task.status]}</Dot>
        </Grid>
        <Grid xs={24}>
          <Text small type="secondary">
            Agent ID: {task.agentId} • Last updated {new Date(task.updatedAt).toLocaleString()}
          </Text>
        </Grid>
        <Spacer h={1} />
        {task.result ? (
          <Grid xs={24}>
            <Text small type="secondary">Result</Text>
            <Code block>{task.result}</Code>
          </Grid>
        ) : null}
        {task.error ? (
          <Grid xs={24}>
            <Text small type="error">{task.error}</Text>
          </Grid>
        ) : null}
      </Grid.Container>
    </Card>
  );
}

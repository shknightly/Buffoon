import { Button, Grid, Loading, Spacer, Table, Text } from '@geist-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import TaskForm from '../components/TaskForm';
import AgentConsole from '../components/AgentConsole';
import { useTasks } from '../utils/api';

export default function TasksPage() {
  const router = useRouter();
  const { data, error, isLoading } = useTasks();

  return (
    <main>
      <div className="site-container">
        <Grid.Container gap={2}>
          <Grid xs={24}>
            <Text h1>Task Console</Text>
            <Text type="secondary">
              Track each request across its lifecycle. Buffoon emits structured events for every container so you
              always know what your agents are doing.
            </Text>
          </Grid>
          <Grid xs={24} md={10}>
            <TaskForm onSubmitted={taskId => router.push(`/agents/${taskId}`)} />
          </Grid>
          <Grid xs={24} md={14}>
            <div role="region" aria-live="polite" aria-busy={isLoading}>
              {isLoading ? (
                <Loading>Fetching tasks…</Loading>
              ) : error ? (
                <Text type="error">Failed to load tasks: {error.message}</Text>
              ) : data && data.length > 0 ? (
                <Table data={data} emptyText="No tasks yet">
                  <Table.Column prop="description" label="Description" width={240} />
                  <Table.Column prop="status" label="Status" width={120} />
                  <Table.Column
                    prop="agentId"
                    label="Agent"
                    render={(value, row) => (
                      <Link href={`/agents/${row.id}`} legacyBehavior>
                        <Button auto size="small" type="success" ghost>
                          Inspect
                        </Button>
                      </Link>
                    )}
                  />
                </Table>
              ) : (
                <Text type="secondary">Submit a task to begin orchestrating agents.</Text>
              )}
            </div>
          </Grid>
        </Grid.Container>
        <Spacer h={3} />
        <Grid.Container gap={2}>
          {data?.map(task => (
            <Grid xs={24} md={12} key={task.id}>
              <AgentConsole task={task} />
            </Grid>
          ))}
        </Grid.Container>
      </div>
      <Footer />
    </main>
  );
}

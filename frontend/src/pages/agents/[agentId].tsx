import { Grid, Loading, Spacer, Text } from '@geist-ui/core';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import Footer from '../../components/Footer';
import AgentConsole from '../../components/AgentConsole';
import VNCViewer from '../../components/VNCViewer';
import { useTask } from '../../utils/api';

export default function AgentDetailPage() {
  const router = useRouter();
  const { agentId } = router.query;
  const taskId = useMemo(() => (typeof agentId === 'string' ? agentId : undefined), [agentId]);
  const { data, error, isLoading } = useTask(taskId);

  return (
    <main>
      <div className="site-container">
        <Grid.Container gap={2}>
          <Grid xs={24}>
            <Text h1>Agent Session</Text>
            <Text type="secondary">
              Inspect live logs, streaming updates, and connect to the sandbox browser.
            </Text>
          </Grid>
          {isLoading ? (
            <Grid xs={24}>
              <Loading>Loading agent details…</Loading>
            </Grid>
          ) : error ? (
            <Grid xs={24}>
              <Text type="error">Unable to load agent details: {error.message}</Text>
            </Grid>
          ) : data ? (
            <>
              <Grid xs={24} md={14}>
                <AgentConsole task={data} />
              </Grid>
              <Grid xs={24} md={10}>
                <VNCViewer endpoint={data.status === 'running' ? `http://localhost:6080/${data.agentId}` : undefined} />
              </Grid>
            </>
          ) : (
            <Grid xs={24}>
              <Text type="secondary">Task not found. Return to the task console to launch a new job.</Text>
            </Grid>
          )}
        </Grid.Container>
        <Spacer h={3} />
      </div>
      <Footer />
    </main>
  );
}

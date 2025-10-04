import { Button, Grid, Spacer, Text } from '@geist-ui/core';
import Link from 'next/link';
import Footer from '../components/Footer';
import TaskForm from '../components/TaskForm';

export default function HomePage() {
  return (
    <main>
      <div className="site-container">
        <Grid.Container gap={2} alignItems="center">
          <Grid xs={24} md={16}>
            <Text h1>Buffoon</Text>
            <Text h3 type="secondary">
              Agent orchestration platform that provisions sandbox containers, routes events, and provides
              full-stack observability for LLM-driven automations.
            </Text>
            <Spacer h={1.5} />
            <Link href="/tasks" legacyBehavior>
              <Button auto shadow type="success">
                View Task Console
              </Button>
            </Link>
          </Grid>
          <Grid xs={24} md={8}>
            <TaskForm />
          </Grid>
        </Grid.Container>
      </div>
      <Footer />
    </main>
  );
}

import { FormEvent, useState } from 'react';
import { Button, Card, Grid, Input, Spacer, Text } from '@geist-ui/core';
import { submitTask } from '../utils/api';

interface TaskFormProps {
  onSubmitted?: (taskId: string) => void;
}

export default function TaskForm({ onSubmitted }: TaskFormProps) {
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!description.trim()) {
      setError('A task description is required to run an agent.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const task = await submitTask(description.trim());
      setDescription('');
      onSubmitted?.(task.id);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Unknown error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="form-section" shadow type="dark">
      <form onSubmit={handleSubmit} aria-label="task submission form">
        <Grid.Container gap={2} justify="flex-start">
          <Grid xs={24}>
            <Text h2>Launch an Agent Task</Text>
            <Text type="secondary">
              Describe the automation you would like the sandboxed agent to perform. Buffoon orchestrates
              containers, streams results, and maintains full observability.
            </Text>
          </Grid>
          <Grid xs={24}>
            <Input.Textarea
              aria-label="Task description"
              placeholder="e.g. Research the latest FastAPI releases and summarize the changelog."
              width="100%"
              value={description}
              onChange={event => setDescription(event.target.value)}
              disabled={isSubmitting}
              minHeight="120px"
            />
          </Grid>
          {error ? (
            <Grid xs={24}>
              <Text type="error" role="alert">
                {error}
              </Text>
            </Grid>
          ) : null}
          <Grid xs={24}>
            <Button
              htmlType="submit"
              shadow
              auto
              loading={isSubmitting}
              aria-busy={isSubmitting}
              aria-live="polite"
            >
              Queue Task
            </Button>
          </Grid>
        </Grid.Container>
      </form>
      <Spacer h={1} />
      <Text small type="secondary">
        Agents execute inside dedicated sandbox containers. Buffoon captures stdout/stderr, final artifacts,
        and heartbeats to keep you informed about long-running workloads.
      </Text>
    </Card>
  );
}

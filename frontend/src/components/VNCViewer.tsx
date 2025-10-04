import { Card, Grid, Link, Spacer, Text } from '@geist-ui/core';

interface VNCViewerProps {
  endpoint?: string;
}

export default function VNCViewer({ endpoint }: VNCViewerProps) {
  return (
    <Card className="status-card" shadow type="dark">
      <Grid.Container gap={1}>
        <Grid xs={24}>
          <Text h3>Live Sandbox Session</Text>
        </Grid>
        <Grid xs={24}>
          <Text type="secondary">
            Buffoon streams interactive browser sessions over WebSockets. Connect using a VNC client or
            compatible web viewer.
          </Text>
        </Grid>
        <Spacer h={1} />
        {endpoint ? (
          <Grid xs={24}>
            <Link href={endpoint} target="_blank" rel="noopener noreferrer">
              Open noVNC session
            </Link>
          </Grid>
        ) : (
          <Grid xs={24}>
            <Text small type="secondary">
              Session endpoint will appear when the sandbox container is provisioned.
            </Text>
          </Grid>
        )}
      </Grid.Container>
    </Card>
  );
}

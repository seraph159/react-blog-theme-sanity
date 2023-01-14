import { Container, Grid, SimpleGrid, Skeleton } from '@mantine/core';

interface Props {
    children: React.ReactNode
  }

export function MainContent({ children }:Props) {
  return (
    <Container my="md">
      <Grid>
        <Grid.Col span={8}>
          {/* Main content goes here */}
          {children}
        </Grid.Col>
        <Grid.Col span={4}>
          {/* Right sidebar goes here */}
            <Skeleton height={150} radius="md" animate={false} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
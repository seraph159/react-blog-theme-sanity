import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio, Group, Avatar } from '@mantine/core';
import Link from 'next/link';
import { Post } from '../../typings';
import urlFor from '../../lib/urlFor';

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    fontSize: theme.fontSizes.lg,
  },

    body: {
    padding: theme.spacing.md,
  },
}));

type Props = {
    data: Post[];
};

export function CardMain({ data }:Props) {
  const { classes } = useStyles();

  const cards = data.map((article) => (
    <Link href={`/${article.slug.current}`} passHref legacyBehavior>
    <Card key={article._id} withBorder radius="md" p={0} className={classes.card}>
    <Group noWrap spacing={0}>
        <Image
          src={urlFor(article.mainImage).url()}
          alt={article.author.name}
          height={160}
          width={160}
        />
      <div className={classes.body}>
          <Text className={classes.title} mt="xs" mb="md">
            {article.title}
          </Text>
          <Group noWrap spacing="xs">
            {/* <Group spacing="xs" noWrap>
              <Text size="xs">{article.author.name}</Text>
            </Group> */}
            <Text size="sm">
              {article.description}
            </Text>
            {/* <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
                {new Date(article._createdAt).toLocaleDateString(
                'en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                }
                )}
            </Text> */}
          </Group>
      </div>
    </Group>
    </Card>
    </Link>
  ));

  return (
    <Container>
      <SimpleGrid cols={1} breakpoints={[{ maxWidth: 'lg', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}

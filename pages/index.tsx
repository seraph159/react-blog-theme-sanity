import { PreviewSuspense } from 'next-sanity/preview';
import { lazy } from 'react';
import { groq } from 'next-sanity';
import { client } from '../lib/sanity.client';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import BlogList from '../components/BlogList/BlogList';

const PreviewBlogList = lazy(() => import('../components/BlogList/PreviewBlogList'));

const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export const getStaticProps = async ({ preview = false }) => {
  if (preview) {
    return { props: { preview } };
  }

  const data = await client.fetch(query);

  return { props: { preview, data } };
};

export default function HomePage({ preview, data }: { preview: boolean, data: any }) {
  if (preview) {
    return (
      <PreviewSuspense fallback="Loading...">
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  return (
  <>
  <BlogList posts={data} />
  </>
  );
}

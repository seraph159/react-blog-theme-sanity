import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { PreviewSuspense } from 'next-sanity/preview';
import { lazy } from 'react';
import { DocumentsCount, query } from 'components/DocumentsCount';
import { client } from 'lib/sanity.client';

const PreviewDocumentsCount = lazy(() => import('components/PreviewDocumentsCount'));

export const getStaticProps = async ({ preview = false }) => {
  if (preview) {
    return { props: { preview } };
  }

  const data = await client.fetch(query);

  return { props: { preview, data } };
};


export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}

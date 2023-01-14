import { groq } from 'next-sanity';
import { useRouter } from 'next/router';
import { PortableText } from '@portabletext/react';
import { useEffect, useState } from 'react';
import { client } from '../../lib/sanity.client';
import { Post } from '../../typings';
import { myPortableTextComponents } from '../../components/RichTextComponent';
import { Navbar } from '../../components/Navbar/Navbar';
import { MainContent } from '../../components/MainContent/MainContent';

function CategoryPost() {
  const router = useRouter();
  const { slug } = router.query;

  const [posts, setPosts] = useState<Post>([]);
  useEffect(() => {
    async function fetchData() {
      const query = groq`
        *[_type=='post' && slug.current == $slug][0]
        {
          ...,
          author->,
          categories[]->
        }
      `;
      const post: Post = await client.fetch(query, { slug });
      setPosts(post);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <MainContent>
      <PortableText value={posts.body} components={myPortableTextComponents} />
      </MainContent>
    </div>
  );
}

export default CategoryPost;

import { Post } from '../../typings';
import { CardMain } from '../Card/CardMain';

type Props = {
    posts: Post[];
};

function BlogList({ posts }: Props) {
  console.log(posts.length);
  return (
    <>
    <CardMain data={posts} />

    </>
  );
}

export default BlogList;

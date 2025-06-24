import { useLoaderData } from 'react-router';
import DisplayBlog from './DisplayBlog';

export default function Blog() {
  const posts = useLoaderData();
  return (
    <div className='grid grid-cols-4 gap-5 mt-8 container mx-auto'>
       
      {posts.map((post) => (
        <DisplayBlog key={post.id} post={post} />
      ))}
    </div>
  );
}

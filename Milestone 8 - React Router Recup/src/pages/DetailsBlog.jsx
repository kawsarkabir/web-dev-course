import { Button } from '@/components/ui/button';
import { useLoaderData, useNavigate } from 'react-router';

export default function DetailsBlog() {
  const post = useLoaderData();
  const navigate = useNavigate();
  return (
    <>
      details blog
      <div>
        <h1> {post.title}</h1>
        <p> {post.body}</p>
        <span>{post.id}</span>
        <Button onClick={() => navigate(-1)}>GO BACK</Button>
      </div>
    </>
  );
}

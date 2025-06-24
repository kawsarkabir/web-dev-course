import { useLoaderData } from 'react-router';

export default function DetailsBlog() {
  const post = useLoaderData();
  return (
    <>
      details blog
      <div>
        <h1> {post.title}</h1>
        <p> {post.body}</p>
        <span>{post.id}</span>
      </div>
    </>
  );
}

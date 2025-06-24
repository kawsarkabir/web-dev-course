import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

// eslint-disable-next-line react/prop-types
export default function DisplayBlog({ post }) {
  const { title, body, id } = post || {};
  return (
    <div className="border border-gray-100 p-4">
      <h1 className="font-semibold text-xl underline text-blue-500">{title}</h1>
      <p>{body}</p>
      <Link to={`/blog/${id}`}>
        <Button className="mt-5" size="sm">
          Details
        </Button>
      </Link>
    </div>
  );
}

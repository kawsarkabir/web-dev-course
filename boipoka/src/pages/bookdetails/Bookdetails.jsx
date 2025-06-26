import { Button } from '@/components/ui/button';
import { addDataToLS } from '@/utils/ls';
import { useLoaderData } from 'react-router';

export default function Bookdetails() {
  const book = useLoaderData();

  const handleMarkAsRead = (id) => {
    console.log('mark as read id', id);
    addDataToLS('readlist', id);
  };

  return (
    <div className="p-5 bg-sky-50 rounded container mx-auto mt-5 flex items-center gap-5">
      <div className="mb-3">
        <img src={book.image} alt="" className="w-72 h-72 rounded-xl" />
      </div>
      <div>
        <div className="space-y-2">
          <h1 className="font-bold text-2xl">{book.bookName}</h1>
        </div>
        <div className="flex items-center justify-between">
          <span className="bg-sky-400 rounded-full px-3 text-white text-sm">
            {book.category}
          </span>
        </div>
        <div className="flex gap-4 mt-5">
          <Button onClick={() => handleMarkAsRead(book.bookId)}>
            Mark As Read
          </Button>
          <Button>Add To WishList</Button>
        </div>
      </div>
    </div>
  );
}

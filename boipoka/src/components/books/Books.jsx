import { dataPromise } from '@/utils/dataPromise';
import { use } from 'react';
import { Link } from 'react-router';

export default function Books() {
  const data = use(dataPromise);
  return (
    <section>
      <h1 className="text-center font-semibold text-2xl text-sky-500">
        Boi Poka Provide The Best Book
      </h1>
      <div className="flex flex-wrap gap-8 mt-14 justify-center items-center ">
        {data.map((book) => (
          <Link to={`/bookdetails/${book.bookId}`} key={book.bookId}>
            <div className="p-5  bg-sky-50 rounded">
              <div className="mb-3">
                <img src={book.image} alt="" className="w-72 h-72 rounded-xl" />
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-xl">{book.bookName}</h1>
                <p className="text-sm">Book by: {book.author}</p>
              </div>
              <hr className="my-3" />
              <div className="flex items-center justify-between">
                <span className="bg-sky-400 rounded-full  px-3 text-white text-sm">
                  {book.category}
                </span>
                <span>{book.rating}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

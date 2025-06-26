import { getDataFromLS } from '@/utils/ls';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

export default function ReadBookList() {
  const data = useLoaderData(); // all books
  const [readBook, setReadBook] = useState([]);

  useEffect(() => {
    // Step 1: Get stored book IDs from localStorage
    const storedIds = getDataFromLS('readlist');

    // Step 2: Prepare array to store matched books
    const matchedBooks = [];

    // Step 3: Loop through each ID and find the book
    for (const id of storedIds) {
      const book = data.find((item) => item.bookId === parseInt(id));
      if (book) {
        matchedBooks.push(book);
      }
    }

    // Step 4: Update state with matched books
    setReadBook(matchedBooks);
  }, [data]);

  return (
    <div>
      <h1>Read Books: {readBook.length}</h1>
      {readBook.map((book) => (
        <div key={book.bookId}>
          <h2>{book.bookName}</h2>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
}

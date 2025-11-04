import React, { Suspense } from "react";
import Book from "./Book";

const Books = ({ booksArray }) => {
  return (
    <div className="p-8">
      <h1 className="text-3xl text-center p-10 font-bold font-serif">Books</h1>

      <Suspense fallback={<span className="font-serif">Loading......</span>}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center shadow-2xl">
          {Array.isArray(booksArray) &&
            booksArray.map((singleBook) => (
              <Book key={singleBook.bookId} singleBook={singleBook} />
            ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;

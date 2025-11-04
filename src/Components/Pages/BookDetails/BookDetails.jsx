import { Star } from "lucide-react";
import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();

  const singleBook = data.find((book) => book.bookId === bookId);
  if (!singleBook) return <p className="text-center">Book not found</p>;

  const {
    bookName,
    image,
    author,
    category,
    publisher,
    tags,
    totalPages,
    rating,
  } = singleBook;

  return (
    <div className="bg-gray-100 min-h-screen p-8 font-serif flex items-center justify-center ">
      <div className="bg-white w-full max-w-5xl shadow-xl rounded-xl p-8 flex flex-col md:flex-row gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center bg-gray-100">
          <img
            src={image}
            alt={bookName}
            className="rounded-xl shadow-md max-h-[450px] object-cover"
          />
        </div>

        {/* Right Info */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-[#23BE0A]">{bookName}</h1>
          <hr />

          <p className="text-black font-bold">Author: {author}</p>
          <hr />

          <p className="text-gray-600">Publisher: {publisher}</p>
          <hr />
          <p className="text-gray-600">Category: {category}</p>
          <hr />

          {tags && (
            <>
              <p className="text-gray-600">
                Tags: <span className="font-medium">{tags.join(", ")}</span>
              </p>
              <hr />
            </>
          )}

          <p className="text-gray-600">Total Pages: {totalPages}</p>
          <hr />

          <p className="text-black  flex gap-2">
            {" "}
            <Star className="text-[#23BE0A]"></Star>
            {rating}
          </p>
          <hr />

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="rounded-lg bg-[#23BE0A] text-white px-6 py-3  hover:bg-green-700 transition-colors font-semibold">
              Mark as Read
            </button>

            <button className="px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition font-semibold">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

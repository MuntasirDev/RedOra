import {  Star } from "lucide-react";
import { Link } from "react-router";
import React from "react";

const Book = ({ singleBook }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    category,
    publisher,
    tags = [],
    rating,
  } = singleBook;

  return (
<Link to={`/bookdetails/${bookId}`}>
    <div className="font-serif card w-full max-w-sm shadow-lg rounded-2xl overflow-hidden bg-linear-to-br from-white to-gray-50 border-2 border-[#8edf77] m-4 flex flex-col ">
      {/* Book Image */}
      <figure className="bg-gray-100 p-4 rounded-b-xl">
        <img
          src={
            image ||
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          alt={bookName || "Book Image"}
          className="rounded-xl object-cover h-64 w-full"
        />
      </figure>

      {/* Book Info */}
      <div className="card-body flex flex-col items-center text-center p-6 gap-2">
        <h2 className="text-[#23BE0A] font-bold text-2xl">
          {bookName || "No Title"}
        </h2>
        <p className="text-gray-700 font-medium">
          {author || "Unknown Author"}
        </p>
        {category && (
          <p className="text-sm text-gray-500">Category: {category}</p>
        )}
        {publisher && (
          <p className="text-sm text-gray-500">Publisher: {publisher}</p>
        )}
        {tags.length > 0 && (
          <p className="text-sm text-gray-500">Tags: {tags.join(", ")}</p>
        )}
        {
         rating && (
            <p className="flex p-2 gap-1 "><Star></Star>{rating}</p>
         )
        }

        {/* Buy Button */}
        <div className="card-actions mt-4">
          <button className=" bg-[#23BE0A] text-white font-semibold px-6 py-3  hover:bg-green-700 transition-colors rounded-lg">
            Buy Now
          </button>
        </div>
      </div>
    </div>
</Link>
  );
};

export default Book;

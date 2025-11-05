import { Star } from "lucide-react";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB, getStoredBook, addToWishlist, getStoredWishlist } from "../../../Utilities/addToDB";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

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

  const handleMarkAsRead = (id) => {
    const storedBooks = getStoredBook();
    if (storedBooks.includes(id)) {
      MySwal.fire({
        icon: "info",
        title: "Already Added!",
        text: "This book is already in your Read List.",
        confirmButtonColor: "#23BE0A",
      });
      return;
    }

    addToStoredDB(id);
    MySwal.fire({
      icon: "success",
      title: "Marked as Read!",
      text: `${bookName} has been added to your Read List.`,
      confirmButtonColor: "#23BE0A",
    });
  };

  const handleAddToWishlist = (id) => {
    const wishlistBooks = getStoredWishlist();
;
    if (wishlistBooks.includes(id)) {
      MySwal.fire({
        icon: "info",
        title: "Already Added!",
        text: "This book is already in your Wishlist.",
        confirmButtonColor: "#23BE0A",
      });
      return;
    }

    addToWishlist(id);
    MySwal.fire({
      icon: "success",
      title: "Added to Wishlist!",
      text: `${bookName} has been added to your Wishlist.`,
      confirmButtonColor: "#23BE0A",
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8 font-serif flex items-center justify-center">
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
          <p className="text-black flex items-center gap-2 text-sm font-medium">
            <Star className="text-[#23BE0A]" />
            {rating}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => handleMarkAsRead(bookId)}
              className="rounded-lg bg-[#23BE0A] text-white px-6 py-3 hover:bg-green-700 transition-colors font-semibold"
            >
              Mark as Read
            </button>

            <button
              onClick={() => handleAddToWishlist(bookId)}
              className="px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition font-semibold"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

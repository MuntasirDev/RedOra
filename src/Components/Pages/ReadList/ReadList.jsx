import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook, addToStoredDB, getStoredWishlist, addToWishlist } from '../../../Utilities/addToDB';
import Book from '../Books/Book';

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();

  // Load Read List
  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBooks = storedBookData.map(id => parseInt(id));
    const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId));
    setReadList(myReadList);
  }, [data]);

  // Load Wishlist
  useEffect(() => {
    const storedWishlistData = getStoredWishlist();
    const convertedWishlist = storedWishlistData.map(id => parseInt(id));
    const myWishlist = data.filter(book => convertedWishlist.includes(book.bookId));
    setWishlist(myWishlist);
  }, [data]);

  // Sorting for Read List (you can expand to wishlist later)
  const handleSort = (type) => {
    setSort(type);

    if (type === "pages") {
      setReadList([...readList].sort((a, b) => a.totalPages - b.totalPages));
    }

    if (type === "rating") {
      setReadList([...readList].sort((a, b) => a.rating - b.rating));
    }
  };

  // Add to Wishlist function
  const handleAddToWishlist = (bookId) => {
    addToWishlist(bookId); // updates localStorage
    const updatedWishlist = data.filter(book => getStoredWishlist().includes(book.bookId));
    setWishlist(updatedWishlist);
  };

  return (
    <div className="p-6 font-serif bg-white min-h-screen">
<div className="flex justify-center mb-6">
  <details className="dropdown relative">
    <summary className="cursor-pointer bg-[#23BE0A] text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-all">
      Sort By: {sort ? sort : "Select"}
    </summary>
    <ul className="absolute left-1/2 -translate-x-1/2 mt-2 w-52 bg-white rounded-lg shadow-lg z-10 p-2">
      <li>
        <button
          onClick={() => handleSort('pages')}
          className="w-full text-left px-4 py-2 hover:bg-[#23BE0A] hover:text-white rounded-md transition-colors"
        >
          Pages
        </button>
      </li>
      <li>
        <button
          onClick={() => handleSort('rating')}
          className="w-full text-left px-4 py-2 hover:bg-[#23BE0A] hover:text-white rounded-md transition-colors"
        >
          Ratings
        </button>
      </li>
    </ul>
  </details>
</div>


      <Tabs>
        <TabList className="flex border-b border-gray-300 mb-6">
          <Tab>
            <span className="px-4 py-2 text-black font-semibold">
              Read Book List ({readList.length})
            </span>
          </Tab>
          <Tab>
            <span className="px-4 py-2 text-black font-semibold">
              My Wishlist ({wishlist.length})
            </span>
          </Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl font-semibold mb-4 text-black">Books You Have Read</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {readList.map(b => (
              <Book key={b.bookId} singleBook={b} onAddToWishlist={() => handleAddToWishlist(b.bookId)} />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <h2 className="text-2xl font-semibold mb-4 text-black">My Wishlist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map(b => (
              <Book key={b.bookId} singleBook={b} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;

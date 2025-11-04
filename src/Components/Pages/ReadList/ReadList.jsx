import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../../Utilities/addToDB';
import Book from '../Books/Book';

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBooks = storedBookData.map(id => parseInt(id));
    const myReadList = data.filter(book =>
      convertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, [data]);

  return (
    <div className="p-6 font-serif bg-white min-h-screen">
      <Tabs>
        <TabList className="flex border-b border-gray-300 mb-6">
          {/* Styled Read Book List tab */}
          <Tab>
            <span className="px-4 py-2  text-Black font-semibold">
              Read Book List ({readList.length})
            </span>
          </Tab>

          {/* Default Wishlist tab */}
          <Tab>My Wishlist</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl font-semibold mb-4 text-black">Books You've Read</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {readList.map(b => (
              <Book key={b.bookId} singleBook={b} />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <h2 className="text-2xl font-semibold mb-4 text-black">My Wishlist</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;

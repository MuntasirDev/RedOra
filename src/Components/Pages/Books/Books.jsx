import React, { useEffect, useState } from "react";

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data);
        console.log(data); // ✅ now you’ll see it in dev tools
      })
      }, []);

  return <div>Books loaded: {allBooks.length}</div>;
};

export default Books;
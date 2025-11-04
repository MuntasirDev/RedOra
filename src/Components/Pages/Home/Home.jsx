import React from 'react';
import Banner from '../../Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);

  
  const booksArray = loaderData || [];  

  return (
    <div>
      <Banner />
      <Books booksArray={booksArray} />
    </div>
  );
};

export default Home;

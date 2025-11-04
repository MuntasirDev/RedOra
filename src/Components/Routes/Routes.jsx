import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ReadList from '../Pages/ReadList/ReadList';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        path: "/",
        loader: async () => {
          const res = await fetch(
            'https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json'
          );
          return res.json(); 
        },
        Component: Home
      },
      {
        path:'/about',
        Component: About
      },
      {
          path:'readList',
           loader: async () => {
          const res = await fetch(
            'https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json'
          );
          return res.json(); 
        },
          Component:ReadList
      },
      {
        path:'/bookdetails/:id',
        loader: async () => {
          const res = await fetch(
            'https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json'
          );
          return res.json(); 
        },
        Component:BookDetails
      }
    ]
  },
]);

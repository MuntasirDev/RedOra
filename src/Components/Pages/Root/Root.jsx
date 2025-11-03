import React from 'react';
import Nav from '../../Header/Nav';
import { Outlet } from 'react-router';
import Footer from '../../Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
          <Nav></Nav>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Root;
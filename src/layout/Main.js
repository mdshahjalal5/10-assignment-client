import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from '../components/Nav';

const Main = () => {
    return <>
        <Nav></Nav>
        <Outlet></Outlet>
    </>
};

export default Main;
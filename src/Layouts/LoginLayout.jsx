import React from 'react';
import Navbar from '../Pages/Share/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div className='bg-slate-100 pb-16'>
            <div className='w-9/12 mx-auto'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default LoginLayout;
import React from 'react';
import Header from '../Pages/Share/Header/Header';
import LeftNav from '../Pages/Share/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';
import RightNav from '../Pages/Share/RightNav/RightNav';
import Footer from '../Pages/Share/Footer/Footer';

const NewsLayout = () => {
    

    return (
        <div>
            <Header></Header>

            <div className="grid gap-5 grid-cols-12 w-9/12 mx-auto">
                <div className="col-start-1 col-end-10">
                    <Outlet></Outlet>
                </div>

                <div className="col-start-10 col-end-13">
                    <RightNav></RightNav>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;
import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import Navbar from '../Navbar/Navbar';


const Header = () => {

    return (
        <div className='md:w-9/12 md:mx-auto '>
            <div className="flex flex-col items-center my-8">
                <img className='w-56 md:w-96' src={logo} alt="" />

                <p className='my-3 text-lg text-slate-500'>Journalism Without Fear or Favour</p>

                <p className='mb-3 text-xl text-slate-700'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>

            <div className='bg-slate-100 p-4 flex gap-5'>
                <button className='bg-red-600 py-2 px-5 text-white font-bold'>Latest</button>

                <Marquee className='text-lg font-bold'>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

            <Navbar></Navbar>

        </div>
    );
};

export default Header;
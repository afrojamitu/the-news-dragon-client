import React from 'react';
import { FaGithub, FaGoogle, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import QZone from '../QZone/QZone';
import BG from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <div>
                <h1 className='text-2xl font-bold'>Login With</h1>

                <button className='border-2 border-blue-500 rounded py-2 w-full mt-4 text-blue-500 flex items-center justify-center gap-3 hover:scale-105 transition-[.5s]'><FaGoogle />Login With Google</button>

                <button className='border-2 border-black rounded py-2 w-full mt-2 flex items-center justify-center gap-3 hover:scale-105 transition-[.5s]'><FaGithub />Login With Github</button>
            </div>

            <div className='my-5'>
                <h1 className='text-2xl font-bold'>Find Us On</h1>
                <ul className='border-2 border-slate-300 rounded text-lg font-bold'>
                    <Link className='p-3 flex items-center gap-3'> <span className='text-blue-600 p-2 rounded-full bg-slate-100 hover:bg-slate-300'><FaFacebook/></span> Facebook</Link>

                    <Link className='border-y-2 border-slate-300 p-3 flex items-center gap-3'> <span className='text-blue-500 p-2 rounded-full bg-slate-100 hover:bg-slate-300'><FaTwitter/></span> Twitter</Link>

                    <Link className='p-3 flex items-center gap-3'> <span className='text-blue-800 p-2 rounded-full bg-slate-100 hover:bg-slate-300'><FaLinkedin/></span> Linkedin</Link>
                </ul>
            </div>

            <div>
                <QZone></QZone>
            </div>

            <div className="my-5 relative">
                <img src={BG} alt="" />
                <div className='absolute text-white top-24 flex flex-col text-center items-center justify-center gap-4 p-5'>
                    <h1 className='text-2xl font-bold text-white'>Create an Amazing Newspaper</h1>
                    <p className='text-sm'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>

                    <button className='bg-red-600 py-2 px-3 text-white font-bold'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;
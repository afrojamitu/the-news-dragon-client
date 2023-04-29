import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {
    const news = useLoaderData();
    const { title, details, image_url } = news;

    return (
        <div>
            <h1 className='text-2xl font-bold mb-4'>Dragon News</h1>

            <div className='border rounded'>
                <div className='my-5 flex flex-col gap-4 mx-5'>
                    <img src={image_url} alt="" />
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <p className='text-lg'>{details}</p>

                    <Link to='/category/0' className='flex items-center gap-3 w-[35%] text-white bg-red-500 py-2 px-5'>
                        <FaArrowLeft></FaArrowLeft>
                        <button>All news in this category</button>
                    </Link>

                </div>
            </div>

            <EditorsInsights></EditorsInsights>
        </div>
    );
};

export default News;
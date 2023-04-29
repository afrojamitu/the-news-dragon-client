import moment from 'moment/moment';
import React from 'react';
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, details, author, image_url, total_view } = news;
    return (
        <div className='my-5 border'>
            <div className='flex items-center justify-between p-3 bg-slate-100'>
                <div className='flex items-center gap-4'>
                    <img className='w-12 h-12 rounded-full' src={author.img} alt="" />
                    <div>
                        <p className='text-lg font-bold'>{author.name}</p>
                        <p> {moment(author.published_date).format("yyyy-mm-D")}</p>
                    </div>
                </div>

                <div className='flex items-center gap-3 text-2xl'>
                    <p><FaRegBookmark /></p>
                    <p><FaShareAlt /></p>
                </div>
            </div>

            <div className='p-4'>
                <h2 className='text-2xl font-bold my-3'>{title}</h2>
                <img src={image_url} alt="" />
                <p className='text-lg my-3 text-slate-600'>
                {
                    details.length < 250 ? <span>{details}</span> : <span>{details.slice(0, 250)}...<Link to={`/news/${_id}`} className='text-red-500'>Read More</Link></span>
                
                }</p>
                <hr />
            </div>
            
            <div className='p-4 flex justify-between'>
                <ul className='flex gap-3 items-center text-xl'>
                    <li className='text-orange-500'><FaStar/></li>
                    <li className='text-orange-500'><FaStar/></li>
                    <li className='text-orange-500'><FaStar/></li>
                    <li className='text-orange-500'><FaStar/></li>
                    <li className='text-orange-500'><FaStar/></li>
                    <li className='text-black'>4.9</li>
                </ul>

                <div className='text-xl flex items-center gap-3'>
                    <FaEye/>
                    <p>{total_view}</p>
                </div>
            </div>

        </div>
    );
};

export default NewsCard;
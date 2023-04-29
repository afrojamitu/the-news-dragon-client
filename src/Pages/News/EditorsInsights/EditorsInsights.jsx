import React from 'react';
import img1 from '../../../assets/editorsInsight1.png'
import img2 from '../../../assets/editorsInsight2.png'
import img3 from '../../../assets/editorsInsight3.png'
import { FaRegCalendar } from 'react-icons/fa';

const EditorsInsights = () => {
    return (
        <div className='my-8'>
            <h1 className='text-2xl font-bold mb-4'>Editors Insights</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div>
                    <img className='h-32' src={img1} />
                    <h1 className='text-xl font-bold mt-3'>21 The Most Stylish Wedding Guest Dresses For Spring</h1>
                    <p className='flex gap-2 items-center'><FaRegCalendar /> Jan 4, 2022</p>
                </div>
                <div>
                    <img className='h-32' src={img2} />
                    <h1 className='text-xl font-bold mt-3'>21 The Most Stylish Wedding Guest Dresses For Spring</h1>
                    <p className='flex gap-2 items-center'><FaRegCalendar /> Jan 4, 2022</p>
                </div>
                <div>
                    <img className='h-32' src={img3} />
                    <h1 className='text-xl font-bold mt-3'>21 The Most Stylish Wedding Guest Dresses For Spring</h1>
                    <p className='flex gap-2 items-center'><FaRegCalendar /> Jan 4, 2022</p>
                </div>
            </div>
        </div>
    );
};

export default EditorsInsights;
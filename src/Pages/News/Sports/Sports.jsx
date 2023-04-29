import React from 'react';
import sport1 from '../../../assets/1.png'
import sport2 from '../../../assets/3.png'
import sport3 from '../../../assets/3.png'
import { FaRegCalendar } from 'react-icons/fa';

const Sports = () => {
    return (
        <div className='my-8'>

            <div className='grid grid-cols-1 gap-4'>
                <div>
                    <img className='h-32' src={sport1} />
                    <h1 className='text-lg font-bold mt-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                    <p className='flex gap-4 items-center'>Sports<FaRegCalendar /> Jan 4, 2022</p>
                </div>
                <div>
                    <img className='h-32' src={sport2} />
                    <h1 className='text-lg font-bold mt-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                    <p className='flex gap-4 items-center'>Sports<FaRegCalendar /> Jan 4, 2022</p>
                </div>
                <div>
                    <img className='h-32' src={sport3} />
                    <h1 className='text-lg font-bold mt-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                    <p className='flex gap-4 items-center'>Sports<FaRegCalendar /> Jan 4, 2022</p>
                </div>
            </div>
        </div>
    );
};

export default Sports;
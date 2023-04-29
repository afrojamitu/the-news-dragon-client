import React from 'react';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-slate-100 p-5 rounded'>
            <h1 className='text-2xl font-bold'>Q-Zone</h1>

            <div className='flex flex-col gap-5'>
                <img src={qZone1} />
                <img src={qZone2} />
                <img src={qZone3} />
            </div>
        </div>
    );
};

export default QZone;
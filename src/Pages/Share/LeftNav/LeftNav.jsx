import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sports from '../../News/Sports/Sports';

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <div>
                <h1 className='text-2xl font-bold'>All Category</h1>

                {
                    categories.map(category => <p key={category.id} className='flex flex-col gap-4 text-xl text-slate-600 font-bold '><Link to={`/category/${category.id}`} className=' p-3 rounded'>{category.name}</Link></p>)
                }
            </div>

            <Sports></Sports>
        </div>
    );
};

export default LeftNav;
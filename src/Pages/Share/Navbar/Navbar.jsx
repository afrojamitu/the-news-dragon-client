import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../../../assets/user-icon.png'
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar pt-10 mb-5">
            <div className="navbar-start">

            </div>
            <div className="navbar-center">
                <ul className='flex gap-5 text-lg font-bold text-slate-600'>
                    <Link to='/category/0'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='career'>Career</Link>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex items-center gap-3">
                    {user && <label tabIndex={0}>
                        <img className='w-8 border-2 rounded-full border-black' src={userIcon} /> </label>}

                    {user ? <button onClick={handleLogout} className='bg-slate-600 py-1 px-3 text-white font-bold'>Logout</button> :
                        <Link to='/login' className='bg-slate-600 py-1 px-3 text-white font-bold'>Login</Link>}

                </div>
            </div>
        </div>
    );
};

export default Navbar;
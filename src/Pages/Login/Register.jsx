import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useState } from 'react';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const handleRegister = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoURL, email, password);
        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleCheckbox = (event) =>{
        // console.log(event.target.checked);
        setAccepted(event.target.checked);
    }

    return (
        <div className='w-9/12 mx-auto bg-base-100 py-5 rounded-lg'>

            <form onSubmit={handleRegister} className='w-3/5 mx-auto'>
                <h1 className='text-2xl font-bold text-center mb-5'>Create Your Account</h1>
                <hr />
                {/* name */}
                <div className='my-5'>
                    <label htmlFor="name" className='block text-xl font-bold text-slate-500 mb-2'>Your Full Name</label>
                    <input type="text" name='name' required placeholder="Full Name" className=" w-full border-2 border-slate-200 py-3 ps-4 rounded-lg" />
                </div>
                {/* photo url */}
                <div className='my-5'>
                    <label htmlFor="URl" className='block text-xl font-bold text-slate-500 mb-2'>Photo URL</label>
                    <input type="text" name='photoURL' required placeholder="Photo URL" className=" w-full border-2 border-slate-200 py-3 ps-4 rounded-lg" />
                </div>
                {/* email */}
                <div className='my-5'>
                    <label htmlFor="email" className='block text-xl font-bold text-slate-500 mb-2'>Email Address</label>
                    <input type="email" name='email' required placeholder="Your Email" className=" w-full border-2 border-slate-200 py-3 ps-4 rounded-lg" />
                </div>
                {/* password */}
                <div className='mb-8'>
                    <label htmlFor="password" className='block text-xl font-bold text-slate-500 mb-2'>Password</label>
                    <input type="password" name='password' required placeholder="Password" className=" w-full border-2 border-slate-200 py-3 ps-4 rounded-lg" />
                </div>

                <p className='flex gap-4 items-center mb-5'>
                    <input onClick={handleCheckbox} type="checkbox" name="accept"/>
                    <span>Accept Terms & Conditions</span>
                </p>

                <button className="w-full bg-slate-700 hover:bg-slate-600 py-2 ps-4 rounded text-white text-xl font-bold" disabled={!accepted} >Register</button>

                <p className='text-center my-4 text-slate-600'>Already have an account?  <Link className='text-red-500' to='/login'>Login Here.</Link></p>
            </form>
        </div>
    );
};

export default Register;
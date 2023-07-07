import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {ReactComponent as FuseLogo} from '../assets/svgs/fuseLogo.svg';
import {ReactComponent as GoogleLogo} from '../assets/svgs/google.svg';
import { signin } from '../services/authService';

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    try {
      const resData = await signin({email, password})
      if(resData)
        navigate('/')
    } catch (error) {
        if(error instanceof Error)
          setError(error.message)
      }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cs-light-gray flex-col">
      <form className="rounded px-8 pt-6 pb-8" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
        <FuseLogo />
          <h2 className="text-4xl font-bold mb-6">welcome to fuse</h2>
        </div>
        <div className="mb-1">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email"
            className="appearance-none border border-black rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-1">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Password"
            className="appearance-none border border-black rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <h6 className='text-sm font-bold'>Forgot your password?</h6>
        {error && <p className='text-cs-red'>{error}</p>}
        <button
          type="submit"
          className="mt-4 w-full bg-cs-orange text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Log in
        </button>
        <div className='text-center my-2'>
          <h6 className='text-sm font-bold'>OR</h6>
        </div>
        <div className='flex bg-[#5C84E7] py-2 px-4 rounded-lg text-white text-sm font-bold items-center cursor-pointer'>
          <div className='w-[25px] h-[25px] bg-white rounded flex justify-center items-center mr-6'>
            <GoogleLogo />
          </div>
          Continue with Google
        </div>
      </form>
      <div className='text-center w-[20%] flex flex-col items-center'>
        <p className='text-xs'>By continuing, you agree to fuse’s <span className='font-bold text-cs-orange'>Terms of Service</span>, <span className='font-bold text-cs-orange'>Privacy Policy</span>.</p>
        <div className='border border-black border-b-1 w-[50%] my-6'></div>
        <div className='flex'>
          <p className='font-bold mr-2'>Not on fuse yet?</p>
          <NavLink to='/signup' className='text-cs-orange font-bold'>Sign up</NavLink>
        </div>
      </div>

    </div>
  );
}

export default LoginForm;
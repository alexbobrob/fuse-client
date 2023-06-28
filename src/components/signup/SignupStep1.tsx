import React, { useState } from 'react';
import {ReactComponent as FuseLogo} from '../../assets/svgs/fuseLogo.svg';
import {ReactComponent as GoogleLogo} from '../../assets/svgs/google.svg';
import Stepper from '../common/Stepper';

function SignupStep1({setStep}:{setStep:any}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const handleNext = () => {
    setStep(2)
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cs-light-gray flex-col">
      <form className="rounded px-8 pt-6 pb-8 w-[80%]" onSubmit={handleNext}>
        <div className="flex flex-col items-center">
        <FuseLogo />
          <h2 className="text-4xl font-bold mb-6">sign up</h2>
          <Stepper step={1}/>
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
        <div className="mb-1">
          <input
            type="password"
            id="re-password"
            value={rePassword}
            onChange={(e)=>setRePassword(e.target.value)}
            placeholder="Reenter Password"
            className="appearance-none border border-black rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          onClick={handleNext}
          className="mt-4 w-full bg-cs-orange text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Next
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
      <div className='text-center w-[60%] flex flex-col items-center'>
        <p className='text-xs'>By continuing, you agree to fuse’s <span className='font-bold text-cs-orange'>Terms of Service</span>, <span className='font-bold text-cs-orange'>Privacy Policy</span>.</p>
      </div>

    </div>
  );
}

export default SignupStep1;
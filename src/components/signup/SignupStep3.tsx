import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {ReactComponent as FuseLogo} from '../../assets/svgs/fuseLogo.svg';
import Stepper from '../common/Stepper';

function SignupStep3() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [typeCompany, setTypeCompany] = useState('');


  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    navigate('/')
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cs-light-gray flex-col">
      <form className="rounded px-8 pt-6 pb-8 w-[120%]" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
        <FuseLogo />
          <h2 className="text-4xl font-bold mb-6">sign up</h2>
          <Stepper step={3}/>
        </div>
        <div className="mb-1">
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
            placeholder="First Name"
            className="appearance-none border border-black rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-1">
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            placeholder="Last Name"
            className="appearance-none border border-black rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-1">
          <input
            type="text"
            id="typeCompany"
            value={typeCompany}
            onChange={(e)=>setTypeCompany(e.target.value)}
            placeholder="Type Company Name or None..."
            className="appearance-none border border-black rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-10 w-full bg-cs-orange text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default SignupStep3;
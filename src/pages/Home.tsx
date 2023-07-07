import React from 'react';
import Profile from '../components/profile';
import Navbar from '../components/navbar';
import SideBar from '../components/sidebar';

const Home = (): JSX.Element => {
  return (
    <div className="bg-cs-body-gray h-screen py-[5%] text-white">
      <div className="bg-cs-dark-gray mx-[2%] h-full">
        <div className="mx-[15%] pt-[5%]">
          <div className="flex">
            <div className="w-[20%] mr-2">
              <SideBar />
            </div>
            <div className="w-[80%]">
              <div className="mb-4">
                <Navbar />
              </div>
              <div className="pl-2">
                <Profile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react'
import discoverIcon from "../../assets/svgs/discoverIcon.svg";
import generateIcon from "../../assets/svgs/generateIcon.svg";
import alertIcon from "../../assets/svgs/alertIcon.svg";
import plusIcon from "../../assets/svgs/plusIcon.svg";
import searchIcon from "../../assets/svgs/searchIcon.svg";
import menuIcon from "../../assets/svgs/menuIcon.svg";
import arrowDownIcon from "../../assets/svgs/arrowDownIcon.svg";
import { renderProfilePicture } from '../common/RenderProfilePicture';

const Navbar
 = () => {
  return (
    <div className='flex pb-6 border border-b-2 border-t-0 border-l-0 border-r-0 border-cs-gray'>
        <div className='flex justify-between h-fit w-[50%]'>
            <img src={plusIcon} alt="Add Friend" className="mr-1 cursor-pointer"/>
            <img src={searchIcon} alt="Add Friend" className="mr-1 cursor-pointer"/>
        </div>
        <div className='flex items-center justify-between w-[50%] pl-4'>
            <div className='flex flex-col items-center'>
                <img src={discoverIcon} alt="Add Friend" className="cursor-pointer"/>
                <p className='text-[12px] mt-2'>DISCOVER</p>
            </div>
            <div className='flex flex-col items-center mt-[-25px]'>
                <img src={generateIcon} alt="Add Friend" className="cursor-pointer w-[90px] h-[90px]"/>
                <p className='text-[12px] mt-[-18px]'>GENERATE</p>
            </div>
            <div className='flex flex-col items-center'>
                <img src={alertIcon} alt="Add Friend" className="cursor-pointer w-[40px] h-[40px]"/>
                <div className='flex mt-2 text-[12px]'>
                    <p>ALERTS</p>
                    <img src={arrowDownIcon} alt="Add Friend" className="cursor-pointer ml-1"/>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                {renderProfilePicture(40)}
                <p className='text-[12px] mt-2'>WELCOME, TERRY</p>
            </div>
            <div className='flex flex-col'>
                <img src={menuIcon} alt="Add Friend" className="cursor-pointer"/>
                <div className='h-[15px]'></div>
            </div>
        </div>

    </div>
  )
}

export default Navbar

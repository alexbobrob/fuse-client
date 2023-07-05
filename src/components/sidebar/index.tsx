import React, { useState } from 'react'
import fireIcon from "../../assets/svgs/fireIcon.svg";
import fuse from "../../assets/svgs/fuse.svg";
import filterIcon from "../../assets/svgs/filterIcon.svg";
import Threads from './Threads';
import Tags from './Tags';

const SideBar
 = () => {
    const [selectedOption, setSelectedOption] = useState('all')
  return (
    <div>
        <div className='flex justify-center mt-[-5px]'>
            <img src={fireIcon} alt="Add Friend" className="mr-2 cursor-pointer"/>
            <img src={fuse} alt="Add Friend" className="cursor-pointer"/>
        </div>
        <div className='pr-[5px]'>
            <div className="flex items-center border border-cs-light-orange px-2 py-1 mt-6">
                <div className="mr-2">
                    <img src={filterIcon} alt="Add Friend"/>
                </div>
                <input type="text" className="outline-none w-[100px] bg-transparent flex-grow"/>
            </div>
        </div>
        <div className='flex mt-4 text-[12px]'>
            <p className='px-1 cursor-pointer' style={{background:selectedOption==='all'?'#5C5656':''}} onClick={()=>setSelectedOption('all')}>ALL</p>
            <p className='mx-1 px-1 cursor-pointer' style={{background:selectedOption==='new'?'#5C5656':''}} onClick={()=>setSelectedOption('new')}>NEW</p>
            <p className='px-1 cursor-pointer' style={{background:selectedOption==='mentions'?'#5C5656':''}} onClick={()=>setSelectedOption('mentions')}>MENTIONS</p>
        </div>
        <Threads />
        <Tags />
    </div>
  )
}

export default SideBar

import React, { useState } from 'react'
import rightArrowIcon from "../../assets/svgs/rightArrowIcon.svg";
import arrowDownIcon from "../../assets/svgs/arrowDownIcon.svg";

const Tags = () => {
    const [isOpen, setIsOpen] = useState(true)

  return (
    <div>
        <div className='mt-4 flex'>
            <p className='text-cs-light-orange text-[20px]'>tags</p>
            <img src={arrowDownIcon} alt="Add Friend" className="cursor-pointer ml-2" onClick={()=>setIsOpen(!isOpen)}/>
        </div>
        {isOpen&&<div className='mt-2'>
            <div className='flex'>
                <img src={rightArrowIcon} alt="Add Friend" className="cursor-pointer mr-1"/>
                <p className='text-[15px]'>news</p>    
            </div>
            <div className='flex mt-2'>
                <img src={rightArrowIcon} alt="Add Friend" className="cursor-pointer mr-1"/>
                <p className='text-[15px]'>cedents</p>    
            </div>
            <div className='flex mt-2'>
                <img src={rightArrowIcon} alt="Add Friend" className="cursor-pointer mr-1"/>
                <p className='text-[15px]'>orig insured</p>    
            </div>
        </div>}
    </div>
  )
}

export default Tags
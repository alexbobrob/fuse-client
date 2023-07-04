import React from 'react'
import Profile from '../components/profile'

const Home = () => {
  return (
    <div className='bg-cs-body-gray h-screen py-[5%] text-white'>
      <div className='bg-cs-dark-gray mx-[2%] h-full'>
        <div className='mx-[15%] py-[8%]'>
          <div className='flex'>
            <div className='w-[20%] bg-cs-gray mr-2'>
            </div>
            <div className='w-[80%]'>
              <div className='flex justify-end mb-4 bg-cs-gray h-10'>
              </div>
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
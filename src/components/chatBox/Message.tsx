import React from 'react'

const Message = ({message}:{message:any}) => {
  const loggedInUser = JSON.parse(localStorage.getItem('user') as string)

  return (
    <div>
        <div className="mt-2">
            <p className="font-bold text-[14px] ml-2 text-cs-flushed capitalize">
            {message.sender.fullName}
            </p>
            <div className='ml-4' dangerouslySetInnerHTML={{ __html: message.content }}></div>
        </div>
    </div>
  )
}

export default Message
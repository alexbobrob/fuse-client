import React from 'react'

const Message = ({formattedMessage}:{formattedMessage:any}) => {
  return (
    <div>
        <div className="mt-2">
            <p className="font-bold text-[14px] ml-2 text-cs-flushed">
            Terry Hamlet
            </p>
            <div className='ml-4' dangerouslySetInnerHTML={{ __html: formattedMessage }}></div>
        </div>
    </div>
  )
}

export default Message
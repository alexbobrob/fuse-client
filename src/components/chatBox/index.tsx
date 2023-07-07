import React, { useState, useRef, useEffect } from 'react';
import expandIcon from "../../assets/svgs/expandIcon.svg";
import closeIcon from "../../assets/svgs/closeIcon.svg";
import locationIcon from "../../assets/svgs/locationIcon.svg";
import attachmentIcon from "../../assets/svgs/attachmentIcon.svg";
import messageIcon from "../../assets/svgs/messageIcon.svg";
import { renderProfilePicture } from '../common/RenderProfilePicture';
import Message from './Message';
import SearchUsers from './SearchUsers';
import { UserData } from '../../services/authService';
import { fetchMessages, sendMessage } from '../../services/chatService';

const Chatbox = ({setIsOpen, chat}:{chat?: any;setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}): JSX.Element => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState([])
  const [selectedUser, setSelectedUser] = useState<UserData>({ fullName:''})
  const [formattedMessage, setFormattedMessage] = useState<string>('');
  const chatboxRef = useRef<HTMLDivElement>(null);
  const loggedInUser = JSON.parse(localStorage.getItem('user') as string)

  const handleFormat = (format: string): void => {
    document.execCommand(format, false, '');
    chatboxRef.current && chatboxRef.current.focus();
  };

  const handleInput = (): void => {
    const messageContent = chatboxRef.current?.innerHTML;
    const formattedContent = messageContent?.replace(
      /(^|\s)@(\w+)/g,
      '$1<span style="color: #46F157;">@$2</span>'
    );
    setMessage(messageContent || '');
    setFormattedMessage(formattedContent || '');
  };

  useEffect(() => {
    chatboxRef.current?.focus();
    if(chat && chat._id)
    handleFetchMessages()
  }, []);

  const handleKeyDown = (e: { key: string; preventDefault: () => void; }) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage()
      setFormattedMessage('')
      setMessage('')
    }
  };

  const handleFetchMessages = async () => {
    try {
        const res = await fetchMessages(chat._id!)
        console.log('msgs', res)
        setMessages(res)
    } catch (error) {
        console.log(error)
    }
  }

  const handleSendMessage = async () => {
    try {
      const data = {
        content: formattedMessage,
        chatId: chat._id!,
        loggedInUserId: loggedInUser.id
      }
      const res = await sendMessage(data)
      console.log('msg', res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-sm">
      <div className='absolute bg-cs-dark-gray w-[581px] h-[351px] border border-cs-gray border-[12px] p-2 px-4'>
        <div className='flex justify-between'>
          {!(selectedUser.fullName!.length>0) && !(chat && chat.users.length>0)?<SearchUsers setSelectedUser={setSelectedUser} handleFetchMessages={handleFetchMessages}/>:
          <div className='flex items-center'>
            {renderProfilePicture(35, chat?.users[1] || selectedUser)}
            <p className="font-bold text-[14px] ml-2 text-cs-flushed">
              {chat?.users[1].fullName || selectedUser.fullName}
            </p>
          </div>}
          <div className="flex h-[20px]">
            <img src={locationIcon} alt="Add Friend" className="cursor-pointer"/>
            <img src={expandIcon} alt="Add Friend" className="cursor-pointer"/>
            <img src={closeIcon} alt="Add Friend" className="cursor-pointer" onClick={()=>setIsOpen(false)}/>
          </div>
        </div>
        <div className='flex justify-center mt-4 mb-6'>
          <div className='border border-1 border-cs-gray w-[95%]'></div>
        </div>
        {messages.map((m)=><Message message={m}/>)}
        <div className='absolute bottom-1 w-full'>
          <div className="flex items-center mt-2 mb-1">
            <img src={attachmentIcon} alt="Add Friend" className="cursor-pointer mt-1"/>
            <img src={messageIcon} alt="Add Friend" className="cursor-pointer ml-2 mr-1 mt-1"/>
            <button onClick={() => handleFormat('bold')} className="mr-1 p-1 font-bold text-cs-soft-gray-two">
              B
            </button>
            <button onClick={() => handleFormat('italic')} className="mr-1 p-1 italic text-cs-soft-gray-two">
              I
            </button>
            <button onClick={() => handleFormat('underline')} className="mr-1 mt-1 p-1 text-cs-soft-gray-two">
              <p>U</p>
              <div className='border border-2 border-cs-soft-gray-two'></div>
            </button>
            <img src={closeIcon} alt="Add Friend" className="cursor-pointer mt-1 w-[20px] h-[20px]"/>
          </div>
          <div
            ref={chatboxRef}
            contentEditable
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            className="border border-b-0 border-l-0 border-r-0 border-cs-gray p-2 w-[90%] text-[14px] outline-none"
          >
          </div>
          <div className="italic text-[14px] absolute bottom-3 left-2 text-cs-soft-gray pointer-events-none">
            {message ? null : 'Type your message here...'}
            </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Chatbox;

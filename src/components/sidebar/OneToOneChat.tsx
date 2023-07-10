import React, { useEffect, useState } from "react";
import { fetchChats } from "../../services/chatService";
import { UserData } from "../../services/authService";
import { renderProfilePicture } from "../common/RenderProfilePicture";
import Chatbox from "../chatBox";

const OneToOneChat = ({ socket }: { socket: any }) => {
  const [oneToOneChats, setOneToOneChats] = useState([]);
  const loggedInUser = JSON.parse(localStorage.getItem("user") as string);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedChat, setselectedChat] = useState({});

  useEffect(() => {
    handleFetchChats();
  }, []);

  const handleFetchChats = async () => {
    const res = await fetchChats(loggedInUser.id);
    setOneToOneChats(res);
  };

  return (
    <>
      {oneToOneChats.length > 0 && (
        <div className="space-y-2 mt-2 ml-4">
          {oneToOneChats.map((chat: { users: UserData[]; _id: string }, i) => (
            <div
              key={i}
              className="flex items-center cursor-pointer"
              onClick={() => {
                setIsOpen(true);
                setselectedChat(chat);
                socket&&socket.emit("join chat", loggedInUser.fullName, chat._id);
              }}
            >
              {chat.users.length > 0 &&
                renderProfilePicture(
                  20,
                  chat.users[1]._id === loggedInUser.id
                    ? chat.users[0]
                    : chat.users[1]
                )}
              <p className="ml-2 text-[14px]">
                {chat.users[1]._id === loggedInUser.id
                  ? chat.users[0]?.fullName
                  : chat.users[1]?.fullName}
              </p>
            </div>
          ))}
          {isOpen && (
            <Chatbox
              socket={socket}
              setIsOpen={setIsOpen}
              selectedChat={selectedChat}
            />
          )}
        </div>
      )}
    </>
  );
};

export default OneToOneChat;

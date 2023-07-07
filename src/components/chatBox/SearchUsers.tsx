import React, { useState } from "react";
import { renderProfilePicture } from "../common/RenderProfilePicture";
import { searchUsers } from "../../services/userServices";
import { UserData } from "../../services/authService";
import { ChatData, initializeChat } from "../../services/chatService";

const SearchUsers = ({
  setSelectedUser,
  handleFetchMessages
}: {
  setSelectedUser: React.Dispatch<React.SetStateAction<UserData>>
  handleFetchMessages: () => void
}) => {
  const [userName, setUserName] = useState("");
  const [users, setUsers] = useState([]);
  const loggedInUser = JSON.parse(localStorage.getItem('user') as string)

  const handleSearchUsers = async (e: { target: { value: string } }) => {
    try {
      const data = await searchUsers(e.target.value);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const debounceSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let typingTimeout: NodeJS.Timeout | null = null;
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    typingTimeout = setTimeout(() => {
      handleSearchUsers(e);
    }, 500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserName(value);
    debounceSearch(e);
  };

  const handleInitializeChat = async (selectedUser: UserData) => {
    setSelectedUser(selectedUser)
    const data: ChatData = {
      loggedInUserId: loggedInUser.id,
      userId: selectedUser?._id!,
      type: 'one-to-one',
    }
    try {
      const res = await initializeChat(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-[50%]">
      <input
        className="ml-3 w-full bg-transparent border-x-0 border-t-0 border border-b-1 border-cs-gray outline-none text-[14px] text-cs-soft-gray"
        type="text"
        placeholder="Search user to chat with..."
        value={userName}
        onChange={handleInputChange}
      />
      {users.length > 0 && userName.length > 0 && (
        <div className="w-[250px] p-2 absolute top-10 left-7 bg-cs-gray space-y-2">
          {users.map((user: UserData, i) => (
            <div
              key={i}
              className="flex cursor-pointer hover:bg-cs-dark-gray p-2"
              onClick={() => handleInitializeChat(user)}
            >
              {renderProfilePicture(25, user)}
              <p className="ml-2 font-bold">{user.fullName}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchUsers;

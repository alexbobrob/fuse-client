import React, { useState } from "react";
import expandIcon from "../../assets/svgs/expandIcon.svg";
import closeIcon from "../../assets/svgs/closeIcon.svg";
import locationIcon from "../../assets/svgs/locationIcon.svg";
import addFriendIcon from "../../assets/svgs/addFriendIcon.svg";
import editIcon from "../../assets/svgs/editIcon.svg";
import heartIcon from "../../assets/svgs/heartIcon.svg";
import { renderProfilePicture } from "../common/RenderProfilePicture";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");
 
  const user = JSON.parse(localStorage.getItem('user') as string)


  const renderTabs = () => {
    return (
      <div className="flex justify-center w-[42%] mt-8 p-1 border border-cs-gray border-r-0 border-l-0">
        <p
          className="text-[12px] cursor-pointer"
          style={{ color: activeTab === "posts" ? "#F47D00" : "" }}
          onClick={() => setActiveTab("posts")}
        >
          POSTS
        </p>
        <p
          className="text-[12px] mx-3 px-3 border border-t-0 border-b-0 cursor-pointer"
          style={{ color: activeTab === "threads" ? "#F47D00" : "" }}
          onClick={() => setActiveTab("threads")}
        >
          THREADS
        </p>
        <p
          className="text-[12px] cursor-pointer"
          style={{ color: activeTab === "tags" ? "#F47D00" : "" }}
          onClick={() => setActiveTab("tags")}
        >
          TAGS
        </p>
      </div>
    );
  };

  return (
    <div className="w-full h-[351px] border border-cs-gray border-[10px] p-4 text-white">
      <div className="flex justify-between">
        <div className="flex w-[50%] justify-between">
          <div className="flex flex-col items-center">
            {renderProfilePicture(45, user)}
            <div className="flex items-center justify-between mt-1">
              <div className="rounded-full w-[10px] h-[10px] bg-cs-green flex items-center justify-center"></div>
              <div className="ml-1 text-[12px]">Available</div>
            </div>
          </div>
          <div className="pr-[100px] pl-10">
            <div className="flex items-center">
              <p className="font-bold text-[14px] text-cs-flushed capitalize">
                {user.fullName}
              </p>
              <div className="mx-2">
                <img src={addFriendIcon} alt="Add Friend" className="cursor-pointer"/>
              </div>
              <div>
                <img src={editIcon} alt="Edit" className="cursor-pointer"/>
              </div>
            </div>
            <div className="text-[12px]">SVP, Property Fac Broker Aon Re</div>
          </div>
        </div>
        <div className="flex w-[50%] justify-between">
          <div className="flex mt-1">
            <div className="text-[11px] py-[1px] px-6 h-fit bg-cs-gray flex flex-col items-center">
              <p>FOLLOWERS</p>
              <p className="text-cs-light-orange">0</p>
            </div>
            <div className="text-[11px] py-[1px] px-6 h-fit bg-cs-gray flex flex-col items-center ml-3">
              <p>FOLLOWING</p>
              <p className="text-cs-light-orange">0</p>
            </div>
          </div>
          <div className="flex h-[20px]">
            <img src={locationIcon} alt="Add Friend" className="cursor-pointer"/>
            <img src={expandIcon} alt="Add Friend" className="cursor-pointer"/>
            <img src={closeIcon} alt="Add Friend" className="cursor-pointer"/>
          </div>
        </div>
      </div>
      {renderTabs()}
      <div className="flex mt-8 w-[80%]">
        <div className="mr-2 mt-[-8px]">{renderProfilePicture(35, user)}</div>
        <div className="mr-8">
          <p className="font-bold text-[14px] text-cs-flushed capitalize">{user.fullName}</p>
          <p className="text-[14px] ml-2">
            Hello World! This is my first ever post on the fuse platform! Happy
            to be here!
          </p>
          <div className="flex mt-1">
            <img src={heartIcon} alt="Add Friend" className="mr-1 cursor-pointer"/>
            <img src={closeIcon} alt="Add Friend" className="cursor-pointer"/>
          </div>
        </div>
        <div className="font-bold text-[10px] text-cs-gray">20m</div>
      </div>
    </div>
  );
};

export default Profile;

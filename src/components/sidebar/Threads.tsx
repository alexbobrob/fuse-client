import React, { useState } from "react";
import rightArrowIcon from "../../assets/svgs/rightArrowIcon.svg";
import arrowDownIcon from "../../assets/svgs/arrowDownIcon.svg";
import OneToOneChat from "./OneToOneChat";

const Threads = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [toggleOneToOneChat, setToggleOneToOneChat] = useState(false);

  return (
    <div>
      <div className="mt-4 flex">
        <p className="text-cs-light-orange text-[20px]">threads</p>
        <img
          src={arrowDownIcon}
          alt="Add Friend"
          className="cursor-pointer ml-2"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div className="mt-2">
          <div className="flex">
            <img
              src={rightArrowIcon}
              alt="Add Friend"
              className="cursor-pointer mr-1"
            />
            <p className="text-[15px]">important</p>
          </div>
          <div className="flex mt-2">
            <img
              src={rightArrowIcon}
              alt="Add Friend"
              className="cursor-pointer mr-1"
            />
            <p className="text-[15px]">market update</p>
          </div>
          <div
            className="flex mt-2 cursor-pointer"
            onClick={() => setToggleOneToOneChat(!toggleOneToOneChat)}
          >
            <img
              src={rightArrowIcon}
              alt="Add Friend"
              className="cursor-pointer mr-1"
            />
            <p className="text-[15px]">1:1 chats</p>
          </div>
          {toggleOneToOneChat && <OneToOneChat />}
          <div className="flex mt-2">
            <img
              src={rightArrowIcon}
              alt="Add Friend"
              className="cursor-pointer mr-1"
            />
            <p className="text-[15px]">external chats</p>
          </div>
          <div className="flex mt-2">
            <img
              src={rightArrowIcon}
              alt="Add Friend"
              className="cursor-pointer mr-1"
            />
            <p className="text-[15px]">team</p>
          </div>
          <div className="flex mt-2">
            <img
              src={rightArrowIcon}
              alt="Add Friend"
              className="cursor-pointer mr-1"
            />
            <p className="text-[15px]">deal rooms</p>
          </div>
          <div className="flex mt-2">
            <img
              src={rightArrowIcon}
              alt="Add Friend"
              className="cursor-pointer mr-1"
            />
            <p className="text-[15px]">market rooms</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Threads;

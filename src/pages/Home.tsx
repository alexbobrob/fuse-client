import React, { useState, useEffect } from "react";
import io from "socket.io-client";

import Profile from "../components/profile";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";
import Chatbox from "../components/chatBox";
// import Chat from '../components/Chat'

let socket: any;

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const loggedInUser = JSON.parse(localStorage.getItem("user") as string);

  useEffect(() => {
    socket = io("http://localhost:4000");
    socket.emit("setup", loggedInUser);
    socket.on("connected", () => {
      console.log(`${loggedInUser.fullName} socket connected`);
    });
  }, []);

  return (
    <div className="bg-cs-body-gray h-screen py-[5%] text-white">
      <div className="bg-cs-dark-gray mx-[2%] h-full">
        <div className="mx-[15%] pt-[5%]">
          <div className="flex">
            <div className="w-[20%] mr-2">
              <SideBar socket={socket} />
            </div>
            <div className="w-[80%]">
              <div className="mb-4">
                <Navbar setIsOpen={setIsOpen} />
                {isOpen && <Chatbox socket={socket} setIsOpen={setIsOpen} />}
              </div>
              <div className="pl-2">
                <Profile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

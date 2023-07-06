import React, { useEffect, useState } from "react";
import { searchUsers } from "../services/userServices";
import io from "socket.io-client";

const Inbox = () => {
  let socket: any = null;
  const [socketConnected, setSocketConnected] = useState(false);
  const [istyping, setIsTyping] = useState(false);
  const [searchedString, setSearchedString] = useState("");
  const [error, setError] = useState("");
  const [searchedResult, setSearchedResult] = useState<any>([]);
  const [selectedUser, setSelectedUser] = useState<any>({});
  const handleSearch = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const resData = await await searchUsers(searchedString);
      console.log("resData");
      setSearchedResult(resData);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    }
  };
  const ENDPOINT = "http://localhost:4000"; // "https://talk-a-tive.herokuapp.com"; -> After deployment

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", selectedUser);
    socket.on("connected", () => setSocketConnected(true));
    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));
  }, []);

  return (
    <>
      <input
        name="search"
        className="appearance-none border border-black rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={searchedString}
        onChange={(event) => setSearchedString(event.target.value)}
      ></input>
      <button onClick={handleSearch}>search user</button>
      {error && <p>error</p>}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        {searchedResult.length > 0 &&
          searchedResult.map((user: any) => (
            <p
              onClick={() => {
                setSelectedUser(user);
                setSearchedString("");
                setSearchedResult([]);
              }}
            >
              {user.fullName}
            </p>
          ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {selectedUser && (
        <div>
          <h1>{selectedUser.fullName}</h1>
          <br></br>
          <input className="appearance-none border border-black rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
          <button>send</button>
        </div>
      )}
    </>
  );
};

export default Inbox;

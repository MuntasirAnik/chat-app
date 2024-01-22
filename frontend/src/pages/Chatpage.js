import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    //const data = await axios.get("");
    //console.log("chats");
    setChats = "chats";
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return <div>{chats.map()}</div>;
};

export default ChatPage;

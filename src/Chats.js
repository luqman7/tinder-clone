import React from "react";
import "./Chats.css";
import Chat from "./Chat";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Hanna"
        message="Love u ❤❤❤"
        timestamp="Just now"
        profilePic="https://www.mstar.com.my/image/830/553?url=https%3A%2F%2Fapicms.mstar.com.my%2Fuploads%2Fimages%2F2020%2F09%2F08%2F850894.jpg"
      />
    </div>
  );
};

export default Chats;

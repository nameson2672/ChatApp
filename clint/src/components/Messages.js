import { useState, useEffect, useRef } from "react";
import { Input, Button } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import Message from "./Message";
import axios from "axios";
import AvatarWithLetter from "./Avtar";

const { TextArea } = Input;

function Messages({ reciver, user }) {
  const url = "http://localhost:5000";
  const [newMessage, setNewMessage] = useState(String);
  const [reciverData, setReciverData] = useState(null);
  const [convertation, setConvertation] = useState(null);
  const [msgFromDb, setMsgFromDb] = useState(null);
  const scrollRef = useRef();

  const sendMessage =async (e) => {
    if (newMessage !== "") {
      // Post to db
      // console.log(convertation._id, user._id, newMessage);
      const msg = await axios({
        method: "post",
        url: `${url}/messages`,
        data: {
          conversationId: convertation._id,
          sender: user._id,
          text: newMessage,
        },
      });
      console.log(msg);
      setNewMessage("");
    } 
    
  };
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [newMessage]);

  useEffect(async () => {
    if (reciver !== null) {
      const get = await axios({
        method: "get",
        url: `${url}/${reciver}`,
      });
      console.log("reciver");
      setReciverData(get.data.data);
    }
  }, [reciver]);

  useEffect(async () => {
    if (reciverData !== null) {
      const get = await axios({
        method: "get",
        url: `${url}/convertation/${user._id}/${reciver}`,
      });
      setConvertation(get.data);
    }
  }, [reciverData]);
  useEffect(async () => {
    if (convertation !== null) {
      const get = await axios({
        method: "get",
        url: `${url}/messages/${convertation._id}`,
      });
      setMsgFromDb(get.data);
    }
  }, [convertation]);

  return (
    <div className="messageContaioner">
      <div className="reciverInfo">
        <div className="topMessage">
          {reciverData ? (
            <div className="flex">
              <AvatarWithLetter userName={reciverData.name} />
              <h2>{reciverData.name}</h2>
            </div>
          ) : (
            <h2>Select user you want to msg</h2>
          )}
        </div>
      </div>
      <div className="msgContainer">
        <div className="chatBoxTop">
          {msgFromDb?.map((m) => (
            <div ref={scrollRef}>
              <Message message={m} own={m.sender === user._id} senderName={reciverData.name} userName={user.name}/>
            </div>
          ))}
        </div>
      </div>
      <div className="messageBox">
        <div className="messageInput">
          <input
            type="text"
            name="message"
            id="message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </div>
        <div className="sendButton">
          <Button
            type="primary"
            icon={<CaretRightOutlined />}
            onClick={sendMessage}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Messages;

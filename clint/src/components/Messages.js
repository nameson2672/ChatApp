import React from 'react'
import { Input, Button } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const { TextArea } = Input;


function Messages() {
    const onSend = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        e.target.value = "";
    }
  
    return (
      <div className="messageContaioner">
        <div className="messageBox">
          <div className="messageInput">
             <input type="text" name="message" id="message" />
          </div>
          <div className="sendButton">
              <Button type="primary" icon={<CaretRightOutlined />}>
                Send
              </Button>
          </div>
        </div>
      </div>
    );
}

export default Messages;

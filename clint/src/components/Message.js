import { format } from "timeago.js";
import AvatarWithLetter from "./Avtar";

export default function Message({ message, own, senderName, userName }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <AvatarWithLetter userName={own? userName : senderName} />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}

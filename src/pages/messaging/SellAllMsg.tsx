import { useEffect, useState } from "react";
import "../../styles/pages/messaging/SeeAllMsg.scss";
import axios from "axios";
import MsgLineItem from "../../components/lineItems/MsgLineItem";
import handleConvertToGoodDateFormat from "../../helper/handleConvertToGoodDateFormat";

function SeeAllMsg() {
  const [msgs, setMsgs] = useState([] as any[]);
  const fetchAllMsg = () => {
    axios
      .get("/messaging/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setMsgs(response.data);
        console.log(msgs[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAllMsg();
  }, []);

  return (
    <div className="see-all-msg-main-container">
      <div className="see-all-msg-title">لیست پیام‌ها</div>
      <div className="see-all-msg-list">
        {msgs.map((msg) => {
          return (
            <MsgLineItem
              contactName={msg.user}
              lastChatTime={handleConvertToGoodDateFormat(msg.updated_at)}
              onClick={() => (location.href = "/msg/" + msg.id + "/")}
            />
          );
        })}
        <MsgLineItem
          contactName="عباس"
          lastChatTime="20:43 PM"
          onClick={() => (location.href = "/msg/12/")}
        />
      </div>
    </div>
  );
}

export default SeeAllMsg;

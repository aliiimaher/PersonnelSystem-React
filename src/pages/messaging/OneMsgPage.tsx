import { useEffect, useState } from "react";
import Msg from "../../components/Msg";
import "../../styles/pages/messaging/OneMsgPage.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import handleConvertToGoodDateFormat from "../../helper/handleConvertToGoodDateFormat";

function OneMsgPage() {
  const { id } = useParams();
  const [conversion, setConversion] = useState<any>();
  const [msgs, setMsgs] = useState([] as any[]);
  const fetchMsgs = () => {
    axios
      .get(`/messaging/${id}/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setConversion(response.data);
        setMsgs(response.data.messages);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchMsgs();
  }, []);

  return (
    <>
      <div className="one-msg-page-main-container">
        <div className="one-msg-page-title">مکالمه</div>
        <div className="one-msg-page-list">
          {msgs.map((msg: any) => (
            <>
              <Msg
                msgTime={handleConvertToGoodDateFormat(conversion.created_at)}
                msgBody={msg ? msg.message_text : ""}
                msgTitle={msg ? "مکالمه " + msg.id : ""}
                senderName={
                  msg ? msg.sender.first_name + " " + msg.sender.last_name : ""
                }
              />
              <div></div>
              <hr />
              <div></div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default OneMsgPage;

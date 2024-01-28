import "../styles/components/Msg.scss";

interface MsgProps {
  msgTime: string;
  senderName: string;
  msgTitle: string;
  msgBody: string;
}

function Msg({ msgTime, senderName, msgTitle, msgBody }: MsgProps) {
  return (
    <>
      <div className="msg-main-container">
        <div className="msg-title">{msgTitle}</div>
        <div className="msg-form">
          <div className="msg-time-sender">
            فرستنده: <strong>{senderName}</strong>
            <div></div>
            زمان ارسال: <strong>{msgTime}</strong>
          </div>
          <hr />
          <div className="msg-body">{msgBody}</div>
        </div>
      </div>
    </>
  );
}

export default Msg;

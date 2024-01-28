import "../../styles/components/lineItems/MsgLineItem.scss";

interface MsgLineItemProps {
  lastChatTime: string;
  contactName: string;
  onClick?: () => void;
}

function MsgLineItem({ lastChatTime, contactName, onClick }: MsgLineItemProps) {
  return (
    <div className="msg-line-item-main-container" onClick={onClick}>
      <div>
        نام مخاطب: <strong>{contactName}</strong>
      </div>
      <div>
        زمان آخرین پیام: <strong>{lastChatTime}</strong>
      </div>
    </div>
  );
}

export default MsgLineItem;

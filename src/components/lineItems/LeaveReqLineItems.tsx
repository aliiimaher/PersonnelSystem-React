import "../../styles/components/lineItems/leaveReqLineItem.scss";

interface LeaveReqLineItemsProps {
  reqDate: string;
  fullName: string;
  personnelNumber: number;
  onClick?: () => void;
}

function LeaveReqLineItems({
  reqDate,
  fullName,
  personnelNumber,
  onClick,
}: LeaveReqLineItemsProps) {
  return (
    <div className="leave-req-line-item-main-container" onClick={onClick}>
      <div>
        تاریخ: <strong>{reqDate}</strong>
      </div>
      <div>
        اسم: <strong>{fullName}</strong>
      </div>
      <div>
        شماره پرسنلی: <strong>{personnelNumber}</strong>
      </div>
    </div>
  );
}

export default LeaveReqLineItems;

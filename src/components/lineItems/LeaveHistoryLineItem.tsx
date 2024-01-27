import handleConvertToGoodDateFormat from "../../helper/handleConvertToGoodDateFormat";
import "../../styles/components/lineItems/LeaveHistoryLineItem.scss";

interface LeaveHistoryLineItemProps {
  leaveDate: string;
  returnDate: string;
  leaveType: string;
  leaveReason: string;
}

function LeaveHistoryLineItem({
  leaveDate,
  returnDate,
  leaveType,
  leaveReason,
}: LeaveHistoryLineItemProps) {
  return (
    <div className="leave-history-line-item-main-container">
      <div>
        تاریخ آغاز: <strong>{handleConvertToGoodDateFormat(leaveDate)}</strong>
      </div>
      <div>
        تاریخ بازگشت:{" "}
        <strong>{handleConvertToGoodDateFormat(returnDate)}</strong>
      </div>
      <div>
        نوع مرخصی: <strong>{leaveType}</strong>
      </div>
      <div>
        دلیل مرخصی: <strong>{leaveReason}</strong>
      </div>
    </div>
  );
}

export default LeaveHistoryLineItem;

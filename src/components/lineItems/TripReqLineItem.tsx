import "../../styles/components/lineItems/TripReqLineItem.scss";

interface TripReqLineItemProps {
  reqDate: string;
  fullName: string;
  personnelNumber: number;
  onClick?: () => void;
}

function TripReqLineItem({
  reqDate,
  fullName,
  personnelNumber,
  onClick,
}: TripReqLineItemProps) {
  return (
    <div className="trip-req-line-item-main-container" onClick={onClick}>
      <div>
        تاریخ درخواست: <strong>{reqDate}</strong>
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

export default TripReqLineItem;

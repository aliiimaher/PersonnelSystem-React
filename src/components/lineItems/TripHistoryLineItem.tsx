import handleConvertToGoodDateFormat from "../../helper/handleConvertToGoodDateFormat";
import "../../styles/components/lineItems/TripHistoryLineItem.scss";

interface TripHistoryLineItemProps {
  tripDate: string;
  source: string;
  destination: string;
  duration?: number;
}

function TripHistoryLineItem({
  tripDate,
  source,
  destination,
  duration,
}: TripHistoryLineItemProps) {
  return (
    <div className="trip-history-line-item-main-container">
      <div>
        تاریخ: <strong>{handleConvertToGoodDateFormat(tripDate)}</strong>
      </div>
      <div>
        مبدا: <strong>{source}</strong>
      </div>
      <div>
        مقصد: <strong>{destination}</strong>
      </div>
      {duration ? (
        <div>
          مدت سفر: <strong>{duration} ساعت</strong>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default TripHistoryLineItem;

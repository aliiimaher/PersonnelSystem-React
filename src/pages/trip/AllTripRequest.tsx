import axios from "axios";
import "../../styles/pages/trip/AllTripRequest.scss";
import { useEffect, useState } from "react";
import TripReqLineItem from "../../components/lineItems/TripReqLineItem";

function AllTripRequest() {
  const [tripReqs, setTripReqs] = useState([] as any[]);
  const fetchAllTripReq = () => {
    axios
      .get("/.../")
      .then((response) => {
        setTripReqs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAllTripReq();
  }, []);
  return (
    <div className="all-trip-req-main-container">
      <div className="all-trip-req-title">لیست درخواست‌های سفر</div>
      <div className="all-trip-req-list">
        {tripReqs.map((trip) => {
          return (
            <TripReqLineItem
              reqDate={trip.reqDate}
              fullName={trip.fullName}
              personnelNumber={trip.personnelNumber}
              onClick={() =>
                (location.href = "/complete-trip-request/" + trip.id + "/")
              }
            />
          );
        })}
        <TripReqLineItem
          reqDate="1400/01/01"
          fullName="محمد محمدی"
          personnelNumber={123456}
          onClick={() => (location.href = "/complete-trip-request/123456/")}
        />
        <TripReqLineItem
          reqDate="1400/01/01"
          fullName="محمد محمدی"
          personnelNumber={123456}
        />
      </div>
    </div>
  );
}

export default AllTripRequest;

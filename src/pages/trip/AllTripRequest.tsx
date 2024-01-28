import axios from "axios";
import "../../styles/pages/trip/AllTripRequest.scss";
import { useEffect, useState } from "react";
import TripReqLineItem from "../../components/lineItems/TripReqLineItem";

function AllTripRequest() {
  const [tripReqs, setTripReqs] = useState([] as any[]);
  const fetchAllTripReq = () => {
    axios
      .get("/trip/all/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      })
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
              reqDate={trip.trip_created}
              fullName={
                trip.employee_detail.first_name +
                " " +
                trip.employee_detail.last_name
              }
              personnelNumber={trip.employee_detail.personnelNumber}
              onClick={() =>
                (location.href = "/complete-trip-request/" + trip.id + "/")
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default AllTripRequest;

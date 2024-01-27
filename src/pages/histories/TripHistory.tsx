import { useEffect, useState } from "react";
import TripHistoryLineItem from "../../components/lineItems/TripHistoryLineItem.tsx";
import "../../styles/pages/histories/TripHistory.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

function TripHistory() {
  const { personnelNumber } = useParams();
  const [trips, setTrips] = useState([] as any[]);
  const fetchAllTrips = () => {
    axios
      .get(`/trip/all/${personnelNumber}/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setTrips(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAllTrips();
  }, []);

  return (
    <>
      <div className="trip-history-main-container">
        <div className="trip-history-title">تاریخچه سفرها</div>
        <div className="trip-history-list">
          {trips.map((trip) => {
            return (
              <TripHistoryLineItem
                source={trip.source}
                destination={trip.destination}
                tripDate={trip.datetime}
                duration={trip.duration}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TripHistory;

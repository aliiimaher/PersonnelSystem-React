import { useEffect, useState } from "react";
import Button from "../../components/Button";
import "../../styles/pages/trip/CompleteTripRequest.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

function CompleteTripRequest() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState<any>();
  const [selectedUser, setSelectedUser] = useState<any>();

  const fetchTrip = () => {
    axios
      .get(`/..../${tripId}/`)
      .then((response) => {
        setTrip(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchUser = () => {
    axios
      .get(`/.../${tripId}/`)
      .then((response) => {
        setSelectedUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAcceptTrip = () => {
    const data = {};
    axios
      .post("/.../" + tripId + "/", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        alert("سفر با موفقیت تایید شد.");
        location.href = "/complete-trip-request/" + tripId + "/";
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const handleRejectTrip = () => {
    const data = {};
    axios
      .post("/.../" + tripId + "/", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        alert("سفر با موفقیت رد شد.");
        location.href = "/complete-trip-request/" + tripId + "/";
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTrip();
    fetchUser();
  }, []);

  return (
    <div className="complete-trip-req-main-container">
      <div className="complete-trip-req-employee-full-info">
        <div className="complete-leave-req-employee-info">
          <strong>اطلاعات کارمند انتخابی</strong>
          <hr />
          <table>
            <tr>
              <th className="complete-trip-req-th">
                <div className="complete-trip-req-personal-info-items">
                  نام و نام خانوادگی:
                </div>
              </th>
              <td>
                <strong>
                  {/* {selectedUser.first_name} {selectedUser.last_name} */}
                </strong>
              </td>

              <th className="complete-trip-req-th">
                <div className="complete-trip-req-personal-info-items">
                  شماره پرسنلی:
                </div>
              </th>
              <td>{/* <strong>{selectedUser.personnelNumber}</strong> */}</td>
            </tr>
          </table>
          <hr />
          <table>
            <tr>
              <th className="complete-trip-req-th">
                <div className="complete-trip-req-personal-info-items">
                  مبدا:
                </div>
              </th>
              <td>{/* <strong>{selectedTripReq.src}</strong> */}</td>
              <th className="complete-trip-req-th">
                <div className="complete-trip-req-personal-info-items">
                  مقصد:
                </div>
              </th>
              <td>{/* <strong>{selectedTripReq.dst}</strong> */}</td>
            </tr>
            <tr>
              <th className="complete-trip-req-th">
                <div className="complete-trip-req-personal-info-items">
                  تاریخ سفر:
                </div>
              </th>
              <td>{/* <strong>{selectedTripReq.startDate}</strong> */}</td>
              {
                /*trip.type*/ "زمینی" === "زمینی" ? (
                  <>
                    <th className="complete-trip-req-th">
                      <div className="complete-trip-req-personal-info-items">
                        شماره صندلی:
                      </div>
                    </th>
                    <td>
                      {/* <strong>{selectedTripReq.seatNumber}</strong> */}
                    </td>
                  </>
                ) : (
                  "mooze"
                )
              }
            </tr>
          </table>
          <hr />
          <div className="complete-trip-req-employee-history-info">
            <Button
              text="مشاهده جزئیات سفر"
              onclick={() =>
                (location.href =
                  "/history-trip/" + selectedUser.personnelNumber + "/")
              }
            />
            <Button
              text="مشاهده جزئیات مرخصی"
              onclick={() =>
                (location.href =
                  "/history-leave/" + selectedUser.personnelNumber + "/")
              }
            />
            <Button
              text="مشاهده جزئیات حقوق"
              onclick={() =>
                (location.href =
                  "/history-payment/" + selectedUser.personnelNumber + "/")
              }
            />
          </div>
          <hr />
          <div className="complete-trip-req-confirm">
            <Button
              text="رد"
              type="submit"
              btn100Width="yes"
              onclick={() => handleRejectTrip()}
            />
            <Button
              text="تایید"
              backgroundColor="green"
              type="submit"
              btn100Width="yes"
              onclick={() => handleAcceptTrip()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompleteTripRequest;

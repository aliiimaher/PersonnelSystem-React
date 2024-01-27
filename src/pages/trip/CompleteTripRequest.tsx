import { useEffect, useState } from "react";
import Button from "../../components/Button";
import "../../styles/pages/trip/CompleteTripRequest.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import handleConvertToGoodDateFormat from "../../helper/handleConvertToGoodDateFormat";

function CompleteTripRequest() {
  const { trip_id } = useParams();
  const [trip, setTrip] = useState<any>();

  const fetchTrip = () => {
    axios
      .get(`/trip/detail/${trip_id}/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setTrip(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAcceptTrip = () => {
    const data = {};
    axios
      .post("/trip/accept/" + trip_id + "/", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        alert("سفر با موفقیت تایید شد.");
        location.href = "/complete-trip-request/";
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const handleRejectTrip = () => {
    const data = {};
    axios
      .post("/trip/reject/" + trip_id + "/", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        alert("سفر با موفقیت رد شد.");
        location.href = "/accept-trip";
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTrip();
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
                  {trip ? trip.employee_detail.first_name : ""}{" "}
                  {trip ? trip.employee_detail.last_name : ""}
                </strong>
              </td>

              <th className="complete-trip-req-th">
                <div className="complete-trip-req-personal-info-items">
                  شماره پرسنلی:
                </div>
              </th>
              <td>
                <strong>
                  {trip ? trip.employee_detail.personnelNumber : ""}
                </strong>
              </td>
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
              <td>
                <strong>{trip ? trip.source : ""}</strong>
              </td>
              <th className="complete-trip-req-th">
                <div className="complete-trip-req-personal-info-items">
                  مقصد:
                </div>
              </th>
              <td>
                <strong>{trip ? trip.destination : ""}</strong>
              </td>
            </tr>
            <tr>
              <th className="complete-trip-req-th">
                <div className="complete-trip-req-personal-info-items">
                  تاریخ سفر:
                </div>
              </th>
              <td>
                <strong>
                  {trip ? handleConvertToGoodDateFormat(trip.datetime) : ""}
                </strong>
              </td>
              {trip ? (
                trip.type === "زمینی" ? (
                  <>
                    <th className="complete-trip-req-th">
                      <div className="complete-trip-req-personal-info-items">
                        شماره صندلی:
                      </div>
                    </th>
                    <td>
                      <strong>{trip ? trip.seat : ""}</strong>
                    </td>
                  </>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </tr>
          </table>
          <hr />
          <div className="complete-trip-req-employee-history-info">
            <Button
              text="مشاهده جزئیات سفر"
              onclick={() =>
                (location.href =
                  "/history-trip/" + trip.employee_detail.personnelNumber + "/")
              }
            />
            <Button
              text="مشاهده جزئیات مرخصی"
              onclick={() =>
                (location.href =
                  "/history-leave/" +
                  trip.employee_detail.personnelNumber +
                  "/")
              }
            />
            <Button
              text="مشاهده جزئیات حقوق"
              onclick={() =>
                (location.href =
                  "/history-payment/" +
                  trip.employee_detail.personnelNumber +
                  "/")
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

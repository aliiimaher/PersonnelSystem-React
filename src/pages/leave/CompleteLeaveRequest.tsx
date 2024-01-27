import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/pages/leave/CompleteLeaveRequest.scss";

function CompleteLeaveRequest() {
  const { leave_id } = useParams();
  const [selectedLeaveReq, setSelectedLeaveReq] = useState<any>();

  const fetchLeaveReq = () => {
    axios
      .get(`/leave/details/${leave_id}/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setSelectedLeaveReq(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAcceptLeave = () => {
    const data = {};
    axios
      .post("/leave/approve/" + leave_id + "/", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        alert("مرخصی با موفقیت تایید شد.");
        location.href = "/accept-leave/";
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const handleRejectLeave = () => {
    const data = {};
    axios
      .post("/leave/reject/" + leave_id + "/", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        alert("مرخصی با موفقیت رد شد.");
        location.href = "/accept-leave/";
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchLeaveReq();
  }, []);

  return (
    <div className="complete-leave-req-main-container">
      <div className="complete-leave-req-employee-full-info">
        <div className="complete-leave-req-employee-info">
          <strong>اطلاعات کارمند انتخابی</strong>
          <hr />
          <table>
            <tr>
              <th className="complete-leave-req-th">
                <div className="complete-leave-req-personal-info-items">
                  نام و نام خانوادگی:
                </div>
              </th>
              <td>
                <strong>
                  {selectedLeaveReq
                    ? selectedLeaveReq.employee_details.first_name +
                      " " +
                      selectedLeaveReq.employee_details.last_name
                    : ""}
                </strong>
              </td>

              <th className="complete-leave-req-th">
                <div className="complete-leave-req-personal-info-items">
                  شماره پرسنلی:
                </div>
              </th>
              <td>
                <strong>
                  {selectedLeaveReq
                    ? selectedLeaveReq.employee_details.personnelNumber
                    : ""}
                </strong>
              </td>
            </tr>
          </table>
          <hr />
          <table>
            <tr>
              <th className="complete-leave-req-th">
                <div className="complete-leave-req-personal-info-items">
                  تاریخ شروع:
                </div>
              </th>
              <td>
                <strong>
                  {selectedLeaveReq ? selectedLeaveReq.start_date : ""}
                </strong>
              </td>

              <th className="complete-leave-req-th">
                <div className="complete-leave-req-personal-info-items">
                  تاریخ پایان:
                </div>
              </th>
              <td>
                <strong>
                  {selectedLeaveReq ? selectedLeaveReq.end_date : ""}
                </strong>
              </td>
            </tr>
            <tr>
              <th className="complete-leave-req-th">
                <div className="complete-leave-req-personal-info-items">
                  نوع مرخصی:
                </div>
              </th>
              <td>
                <strong>
                  {selectedLeaveReq ? selectedLeaveReq.reason : ""}
                </strong>
              </td>

              <th className="complete-leave-req-th">
                <div className="complete-leave-req-personal-info-items">
                  علت مرخصی:
                </div>
              </th>
              <td>
                <strong>
                  {selectedLeaveReq ? selectedLeaveReq.description : ""}
                </strong>
              </td>
            </tr>
          </table>
          <hr />
          <div className="complete-leave-req-confirm">
            <Button text="رد" onclick={() => handleRejectLeave()} />
            <Button
              text="تایید"
              backgroundColor="green"
              onclick={() => handleAcceptLeave()}
            />
          </div>
          <hr />
          <div className="complete-payment-employee-history-info">
            <Button
              text="مشاهده جزئیات سفر"
              onclick={() =>
                (location.href =
                  "/history-trip/" +
                  selectedLeaveReq.employee_details.personnelNumber +
                  "/")
              }
            />
            <Button
              text="مشاهده جزئیات مرخصی"
              onclick={() =>
                (location.href =
                  "/history-leave/" +
                  selectedLeaveReq.employee_details.personnelNumber +
                  "/")
              }
            />
            <Button
              text="مشاهده جزئیات حقوق"
              onclick={() =>
                (location.href =
                  "/history-payment/" +
                  selectedLeaveReq.employee_details.personnelNumber +
                  "/")
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompleteLeaveRequest;

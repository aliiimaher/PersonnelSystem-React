import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/pages/leave/CompleteLeaveRequest.scss";

function CompleteLeaveRequest() {
  const { personnelNumber } = useParams();
  const [selectedUser, setSelectedUser] = useState<any>();
  const [_selectedLeaveReq, setSelectedLeaveReq] = useState<any>({});

  const fetchUser = () => {
    axios
      .get(`/.../${personnelNumber}/`)
      .then((response) => {
        setSelectedUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchLeaveReq = () => {
    axios
      .get(`/.../${personnelNumber}/`)
      .then((response) => {
        setSelectedLeaveReq(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchUser();
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
                  {/* {selectedUser.first_name} {selectedUser.last_name} */}
                </strong>
              </td>

              <th className="complete-leave-req-th">
                <div className="complete-leave-req-personal-info-items">
                  شماره پرسنلی:
                </div>
              </th>
              <td>{/* <strong>{selectedUser.personnelNumber}</strong> */}</td>
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
              <td>{/* <strong>{selectedLeaveReq.startDate}</strong> */}</td>

              <th className="complete-leave-req-th">
                <div className="complete-leave-req-personal-info-items">
                  تاریخ پایان:
                </div>
              </th>
              <td>{/* <strong>{selectedLeaveReq.endDate}</strong> */}</td>
            </tr>
            <tr>
              <th className="complete-leave-req-th">
                <div className="complete-leave-req-personal-info-items">
                  نوع مرخصی:
                </div>
              </th>
              <td>{/* <strong>{selectedLeaveReq.leaveType}</strong> */}</td>

              <th className="complete-leave-req-th">
                <div className="complete-leave-req-personal-info-items">
                  علت مرخصی:
                </div>
              </th>
              <td>{/* <strong>{selectedLeaveReq.leaveReason}</strong> */}</td>
            </tr>
          </table>
          <hr />
          <div className="complete-leave-req-confirm">
            <Button text="رد" type="submit" />
            <Button text="تایید" backgroundColor="green" type="submit" />
          </div>
          <hr />
          <div className="complete-payment-employee-history-info">
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
        </div>
      </div>
    </div>
  );
}

export default CompleteLeaveRequest;

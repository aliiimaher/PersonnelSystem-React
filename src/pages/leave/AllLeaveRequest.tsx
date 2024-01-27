import "../../styles/pages/leave/AllLeaveReq.scss";

import LeaveReqLineItems from "../../components/lineItems/LeaveReqLineItems";
import { useEffect, useState } from "react";
import axios from "axios";

function AllLeaveRequest() {
  const [leaveReqs, setLeaveReqs] = useState([] as any[]);
  const fetchAllLeaveReq = () => {
    axios
      .get("/leave/see-all/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setLeaveReqs(response.data);
        console.log(leaveReqs);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAllLeaveReq();
  }, []);

  return (
    <div className="all-leave-req-main-container">
      <div className="all-leave-req-title">لیست درخواست‌های مرخصی</div>
      <div className="all-leave-req-list">
        {leaveReqs.map((leaveReq) => {
          return (
            <LeaveReqLineItems
              reqDate={leaveReq.created_at}
              fullName={
                leaveReq.employee_details.first_name +
                " " +
                leaveReq.employee_details.last_name
              }
              personnelNumber={leaveReq.employee_details.personnelNumber}
              onClick={() =>
                (location.href =
                  "/complete-leave-request/" +
                  leaveReq.id +
                  "/")
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default AllLeaveRequest;

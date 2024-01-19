import "../../styles/pages/leave/AllLeaveReq.scss";

import LeaveReqLineItems from "../../components/lineItems/LeaveReqLineItems";
import { useEffect, useState } from "react";
import axios from "axios";

function AllLeaveRequest() {
  const [leaveReqs, setLeaveReqs] = useState([] as any[]);
  const fetchAllLeaveReq = () => {
    axios
      .get("/.../")
      .then((response) => {
        setLeaveReqs(response.data);
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
              reqDate={leaveReq.reqDate}
              fullName={leaveReq.fullName}
              personnelNumber={leaveReq.personnelNumber}
              onClick={() =>
                (location.href = "/complete-leave-request/" + leaveReq.personnelNumber + "/")
              }
            />
          );
        })}
        <LeaveReqLineItems
          reqDate="1400/01/01"
          fullName="محمد محمدی"
          personnelNumber={123456}
          onClick={() => (location.href = "/complete-leave-request/123456/")}
        />
        <LeaveReqLineItems
          reqDate="1400/01/01"
          fullName="محمد محمدی"
          personnelNumber={123456}
        />
        <LeaveReqLineItems
          reqDate="1400/01/01"
          fullName="محمد محمدی"
          personnelNumber={123456}
        />
      </div>
    </div>
  );
}

export default AllLeaveRequest;

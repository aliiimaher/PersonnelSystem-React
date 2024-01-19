import { useParams } from "react-router-dom";
import LeaveHistoryLineItem from "../../components/lineItems/LeaveHistoryLineItem";
import "../../styles/pages/histories/LeaveHistory.scss";
import { useEffect, useState } from "react";
import axios from "axios";

function LeaveHistory() {
  const { personnelNumber } = useParams();
  const [leaves, setLeaves] = useState([] as any[]);
  const fetchAllLeaves = () => {
    axios
      .get(`/.../${personnelNumber}/`)
      .then((response) => {
        setLeaves(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAllLeaves();
  }, []);

  return (
    <div className="leave-history-main-container">
      <div className="leave-history-title">تاریخچه مرخصی ها</div>
      <div className="leave-history-list">
        {leaves.map((leave) => {
            return (
                <LeaveHistoryLineItem
                    leaveDate={leave.leaveDate}
                    returnDate={leave.returnDate}
                    leaveType={leave.leaveType}
                    leaveReason={leave.leaveReason}
                />
            )
        })}
        <LeaveHistoryLineItem
          leaveDate="99/99/99"
          leaveType="استعلاجی"
          returnDate="99/99/99"
          leaveReason="بیماری"
        />
        <LeaveHistoryLineItem
          leaveDate="99/99/99"
          leaveType="استعلاجی"
          returnDate="99/99/99"
          leaveReason="بیماری"
        />
      </div>
    </div>
  );
}

export default LeaveHistory;

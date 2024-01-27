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
      .get(`/leave/see-all-for-employee/${personnelNumber}/`)
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
              leaveDate={leave.start_date}
              returnDate={leave.end_date}
              leaveType={leave.reason}
              leaveReason={leave.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default LeaveHistory;

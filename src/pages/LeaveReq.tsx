import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/pages/LeaveReq.scss";
import Button from "../components/Button";
import InputBox from "../components/InputBox";

function LeaveReq() {
  const [selectedLeaveType, setSelectedLeaveType] = useState("");
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>();
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>();

  const handleSelectType = (event: any) => {
    setSelectedLeaveType(event.target.value);
  };

  const testHandle = () => {
    console.log("start: ", selectedStartDate);
    console.log("end: ", selectedEndDate);
    console.log("type: ", selectedLeaveType);
  };
  return (
    <>
      <div className="leave-main-container">
        <h3>مرخصی</h3>
        <div className="leave-form">
          <select
            className="form-select form-select-lg mb-3"
            aria-label="Large select example"
            onChange={handleSelectType}
            value={selectedLeaveType}
          >
            <option selected>نوع مرخصی را انتخاب کنید</option>
            <option value="اضطراری">اضطراری</option>
            <option value="معمولی">معمولی</option>
            <option value="اعیاد رسمی">اعیاد رسمی</option>
          </select>
        </div>
        <div className="leave-datepicker">
          <DatePicker
            selected={selectedStartDate}
            onChange={(date) => setSelectedStartDate(date)}
            dateFormat="yyyy/MM/dd"
            placeholderText="روز شروع"
          />
          <DatePicker
            selected={selectedEndDate}
            onChange={(date) => setSelectedEndDate(date)}
            dateFormat="yyyy/MM/dd"
            placeholderText="روز پايان"
          />
        </div>
        <div className="leave-reason-input">
          <InputBox type="textarea" placeHolder="علت مرخصی را شرح دهید" />
        </div>
        <Button text="ذخيره" onclick={testHandle} />
      </div>
    </>
  );
}

export default LeaveReq;

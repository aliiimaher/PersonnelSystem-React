import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/pages/LeaveReq.scss";
import Button from "../components/Button";

function LeaveReq() {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>();
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>();

  const testHandle = () => {
    console.log("start: ", selectedStartDate);
    console.log("end: ", selectedEndDate);
  };
  return (
    <>
      <div className="leave-main-container">
        <h3>مرخصی</h3>
        <div className="leave-form">
          <select
            className="form-select form-select-lg mb-3"
            aria-label="Large select example"
          >
            <option selected>نوع مرخصی را انتخاب کنید</option>
            <option value="1">اضطراری</option>
            <option value="2">معمولی</option>
            <option value="3">اعیاد رسمی</option>
          </select>
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
        <Button text="دخيره" onclick={testHandle} />
      </div>
    </>
  );
}

export default LeaveReq;

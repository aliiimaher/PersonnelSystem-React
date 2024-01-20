import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/pages/leave/LeaveReq.scss";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import axios from "axios";

function LeaveReq() {
  const { register, handleSubmit, watch } = useForm();

  const [selectedLeaveType, setSelectedLeaveType] = useState("");
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>();
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>();

  const handleSelectType = (event: any) => {
    setSelectedLeaveType(event.target.value);
  };

  const onSubmit = (data: any) => {
    data.start_date = selectedStartDate;
    data.end_date = selectedEndDate;
    // شمخخخخخخخخخخخخخخخخ
    data.reason = "Sick";
    data.description = watch("reason");
    console.log(data);
    axios
      .post("/leave/request/", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(watch("leaveReason"));
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="leave-reason-input-form"
        >
          <div className="leave-reason-input">
            <label>علت مرخصی:</label>
            <input
              type="text"
              {...register("reason")}
              placeholder="علت مرخصی خود را شرح دهید..."
            />
          </div>
          <Button text="ذخيره" type="submit" />
        </form>
      </div>
    </>
  );
}

export default LeaveReq;

import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/pages/leave/LeaveReq.scss";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import handleCheckForLogin from "../../helper/handleCheckForLogin";

function LeaveReq() {
  const { register, watch } = useForm();

  const [selectedLeaveType, setSelectedLeaveType] = useState("");
  const [selectedStartDate, setSelectedStartDate] = useState<any | null>();
  const [selectedEndDate, setSelectedEndDate] = useState<any | null>();

  const handleSelectType = (event: any) => {
    setSelectedLeaveType(event.target.value);
  };

  const onSubmit = () => {
    const data: any = {};
    data.start_date = selectedStartDate;
    data.end_date = selectedEndDate;
    data.reason = selectedLeaveType;
    data.description = watch("reason");
    console.log(data);
    axios
      .post("/leave/request/", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        alert("مرخصی با موفقیت ثبت شد.");
        location.href = "/profile/";
      });
    alert("مرخصی با موفقیت ثبت شد.");
    location.href = "/profile/";
    // .catch((error) => {
    //   console.log(error);
    // })
  };

  useEffect(() => {
    handleCheckForLogin();
  }, []);

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
        <form className="leave-reason-input-form">
          <div className="leave-reason-input">
            <label>علت مرخصی:</label>
            <input
              type="text"
              {...register("reason")}
              placeholder="علت مرخصی خود را شرح دهید..."
            />
          </div>
          <Button text="ذخيره" onclick={() => onSubmit()} />
        </form>
      </div>
    </>
  );
}

export default LeaveReq;

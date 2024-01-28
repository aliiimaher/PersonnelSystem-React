import { useEffect, useState } from "react";
import "../../styles/pages/trip/ResTrip.scss";
import InputBox from "../../components/InputBox";
import DatePicker from "react-datepicker";
import LandTrip from "../../components/tripTypes/LandTrip";
import Button from "../../components/Button";
import AirTrip from "../../components/tripTypes/AirTrip";
import VoyageTrip from "../../components/tripTypes/VoyageTrip";
import axios from "axios";
import { useForm } from "react-hook-form";
import handleCheckForLogin from "../../helper/handleCheckForLogin";

function ResTrip() {
  const { register, watch } = useForm();

  const [selectedTripType, setSelectedTripType] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>();

  const handleSelectType = (event: any) => {
    setSelectedTripType(event.target.value);
  };

  const handleConfirmTrip = () => {
    const data = {
      source: watch("src"),
      destination: watch("dst"),
      type: selectedTripType,
      seat: window.localStorage.getItem("selectedSeat"),
      datetime: selectedDate,
    };
    console.log(data);
    axios
      .post("/trip/request/", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        alert("سفر با موفقیت ثبت شد.");
        window.localStorage.removeItem("selectedSeat");
        location.href = "/profile/";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCancelTrip = () => {
    window.localStorage.removeItem("selectedSeat");
    location.reload();
  };

  useEffect(() => {
    handleCheckForLogin();
  }, []);

  return (
    <div className="res-trip-main-container">
      <div className="res-trip-title">رزرو سفر</div>
      <div className="res-trip-form">
        <select
          className="form-select form-select-lg mb-3"
          aria-label="Large select example"
          onChange={handleSelectType}
          value={selectedTripType}
        >
          <option selected>نوع سفر را انتخاب کنید</option>
          <option value="هوایی">هوایی</option>
          <option value="زمینی">زمینی</option>
          <option value="دریایی">دریایی</option>
        </select>
        <div className="res-trip-form">
          <div className="res-trip-form-item">
            <label>مبدا</label>
            <InputBox
              placeHolder="مبدا را وارد کنید."
              maxWidth="80%"
              reactHookFrom={register("src")}
            />
            <label>مقصد</label>
            <InputBox
              placeHolder="مقصد را وارد کنید."
              maxWidth="80%"
              reactHookFrom={register("dst")}
            />
          </div>
          <div className="res-trip-form-item">
            <label>تاریخ</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="yyyy/MM/dd"
              placeholderText="تاریخ"
            />
          </div>
        </div>
        <hr />
        <div>
          {selectedTripType === "هوایی" ? (
            <AirTrip />
          ) : selectedTripType === "زمینی" ? (
            <LandTrip />
          ) : selectedTripType === "دریایی" ? (
            <VoyageTrip />
          ) : (
            ""
          )}
        </div>
        <hr />
        <div className="res-trip-form-btn">
          <Button
            text="انصراف"
            btn100Width="yes"
            onclick={() => handleCancelTrip()}
          />
          <Button
            text="ثبت سفر"
            btn100Width="yes"
            backgroundColor="green"
            onclick={() => handleConfirmTrip()}
          />
        </div>
      </div>
    </div>
  );
}

export default ResTrip;

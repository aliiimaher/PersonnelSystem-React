import { useEffect, useState } from "react";
import "../../styles/pages/trip/ResTrip.scss";
import InputBox from "../../components/InputBox";
import DatePicker from "react-datepicker";
import LandTrip from "../../components/tripTypes/LandTrip";
import axios from "axios";
import Button from "../../components/Button";
import AirTrip from "../../components/tripTypes/AirTrip";
import VoyageTrip from "../../components/tripTypes/VoyageTrip";

function ResTrip() {
  const [selectedTripType, setSelectedTripType] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>();

  const handleSelectType = (event: any) => {
    setSelectedTripType(event.target.value);
  };

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
            <InputBox placeHolder="مبدا را وارد کنید." maxWidth="80%" />
            <label>مقصد</label>
            <InputBox placeHolder="مقصد را وارد کنید." maxWidth="80%" />
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
          <Button text="انصراف" btn100Width="yes" />
          <Button text="ثبت سفر" btn100Width="yes" backgroundColor="green" />
        </div>
      </div>
    </div>
  );
}

export default ResTrip;

import { useState } from "react";
import "../../styles/pages/trip/ResTrip.scss";

function ResTrip() {
  const [selectedTripType, setSelectedTripType] = useState("");

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
      </div>
    </div>
  );
}

export default ResTrip;

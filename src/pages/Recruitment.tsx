import { useState } from "react";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import "../styles/pages/Recruitment.scss";

function Recruitment() {
  const [numberOfMonths, setNumberOfMonths] = useState(0);
  const [numberOfEmp, setNumberOfEmp] = useState(0);
  const [skill, setSkill] = useState("");

  const handleSkillChange = (event: any) => {
    setSkill(event.target.value);
  };

  const handleMonthCountChange = (event: any) => {
    setNumberOfMonths(event.target.value);
  };

  const handleEmpCountChange = (event: any) => {
    setNumberOfEmp(event.target.value);
  };

  return (
    <>
      <div className="recruitment-main-container">
        <select
          className="form-select form-select-lg mb-3"
          aria-label="Large select example"
          onChange={handleSkillChange}
          value={skill}
        >
          <option selected>حرفه مورد نظر را انتخاب کنید</option>
          <option value="front">فرانت-اند دولپر</option>
          <option value="back">بک-اند دولپر</option>
          <option value="UI">طراح</option>
        </select>
        <InputBox
          onchange={handleEmpCountChange}
          value={numberOfEmp}
          placeHolder="تعداد افراد"
        />
        <InputBox
          onchange={handleMonthCountChange}
          value={numberOfMonths}
          placeHolder="تعداد ماه‌ها"
        />
        <div className="recruitment-price">
          قیمت برآورد شده:{" "}
          {numberOfMonths * numberOfEmp * (skill === "UI" ? 800 : 1000)} تومان
        </div>

        <Button text="ثبت درخواست نیروی جدید" />
      </div>
    </>
  );
}

export default Recruitment;

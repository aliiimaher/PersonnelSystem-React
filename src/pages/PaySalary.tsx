import axios from "axios";
import EmployeeLineItem from "../components/EmployeeLineItem";
import InputBox from "../components/InputBox";
import "../styles/pages/PaySalary.scss";
import { useEffect, useState } from "react";

function PaySalary() {
  const [payments, setPayments] = useState([] as any[]);

  const fetchAllPayment = () => {
    axios
      .get("/.../")
      .then((response) => {
        setPayments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAllPayment();
  }, []);
  return (
    <>
      <div className="pay-salary-main-container">
        <div className="pay-salary-title">
          <h3>پرداخت حقوق</h3>
          <h4>کارمند مورد نظر را انتخاب کنید...</h4>
        </div>
        <div>
          <InputBox placeHolder="شماره پرسنلی کارمند مورد نظر..." />
        </div>
        <div className="pay-salary-payment-list">
          {payments.map((payment) => {
            return (
              <EmployeeLineItem
                name={payment.name}
                personnelNumber={payment.personnelNumber}
                paymentValue={payment.paymentValue}
                handleClick={() => console.log("yesss")}
              />
            );
          })}
          <EmployeeLineItem
            name="علی ماهر"
            personnelNumber={123}
            paymentValue={15000}
            handleClick={() => console.log("yesss")}
          />
          <EmployeeLineItem
            name="علی ماهر"
            personnelNumber={123}
            paymentValue={15000}
            handleClick={() => console.log("yesss")}
          />
          <EmployeeLineItem
            name="علی ماهر"
            personnelNumber={123}
            paymentValue={15000}
            handleClick={() => console.log("yesss")}
          />
          <EmployeeLineItem
            name="علی ماهر"
            personnelNumber={123}
            paymentValue={15000}
            handleClick={() => console.log("yesss")}
          />
          <EmployeeLineItem
            name="علی ماهر"
            personnelNumber={123}
            paymentValue={15000}
            handleClick={() => console.log("yesss")}
          />
          <EmployeeLineItem
            name="علی ماهر"
            personnelNumber={123}
            paymentValue={15000}
            handleClick={() => console.log("yesss")}
          />
          <EmployeeLineItem
            name="علی ماهر"
            personnelNumber={123}
            paymentValue={15000}
            handleClick={() => console.log("yesss")}
          />
        </div>
      </div>
    </>
  );
}

export default PaySalary;

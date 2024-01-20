import axios from "axios";
import EmployeeLineItem from "../../components/EmployeeLineItem";
import InputBox from "../../components/InputBox";
import "../../styles/pages/payment/PaySalary.scss";
import { useEffect, useState } from "react";

function PaySalary() {
  const [payments, setPayments] = useState([] as any[]);

  const fetchAllPayment = () => {
    axios
      .get("/salary/slip/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      })
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
                name={
                  payment.employee_details.first_name +
                  " " +
                  payment.employee_details.last_name
                }
                personnelNumber={payment.employee_details.personnelNumber}
                paymentValue={payment.salary_value}
                handleClick={() => {
                  (location.href =
                    "/complete-payment/" +
                    payment.employee_details.personnelNumber +
                    "/"),
                    console.log(payment.employee_details.personnelNumber);
                }}
              />
            );
          })}
          <EmployeeLineItem
            name="علی ماهر"
            personnelNumber={123}
            paymentValue={15000}
            handleClick={() => (location.href = "/complete-payment/" + "123/")}
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

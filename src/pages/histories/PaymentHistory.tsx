import "../../styles/pages/histories/PaymentHistory.scss";
import PaymentHistoryLineItem from "../../components/lineItems/PaymentHistoryLineItem";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PaymentHistory() {
  const { personnelNumber } = useParams();
  const [payments, setPayments] = useState([] as any[]);
  const fetchAllPayment = () => {
    axios
      .get(`/salary/paid-slip/${personnelNumber}/`, {
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
    <div className="payment-history-main-container">
      <div className="payment-history-title">تاریخچه پرداخت‌ها</div>
      <div className="payment-history-list">
        {payments.map((payment) => {
          return (
            <PaymentHistoryLineItem
              paymentDate={payment.year + " " + payment.month}
              paymentAmount={payment.salary_value}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PaymentHistory;

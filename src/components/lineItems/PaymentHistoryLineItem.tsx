import "../../styles/components/lineItems/PaymentHistoryLineItem.scss";

interface PaymentHistoryLineItemProps {
  paymentDate: string;
  paymentAmount: number;
}

function PaymentHistoryLineItem({
  paymentDate,
  paymentAmount,
}: PaymentHistoryLineItemProps) {
  return (
    <>
      <div className="payment-history-line-item-main-container">
        <div>
          تاریخ: <strong>{paymentDate}</strong>
        </div>
        <div>
          مبلغ: <strong>{paymentAmount} تومان</strong>
        </div>
      </div>
    </>
  );
}

export default PaymentHistoryLineItem;

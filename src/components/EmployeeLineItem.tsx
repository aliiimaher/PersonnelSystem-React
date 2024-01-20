import "../styles/components/EmployeeLineItem.scss";

interface Props {
  name: string;
  personnelNumber: number;
  paymentValue: number;
  handleClick: () => void;
}

function EmployeeLineItem({
  name,
  personnelNumber,
  paymentValue,
  handleClick,
}: Props) {
  return (
    <>
      <div className="employee-line-item-main" onClick={handleClick}>
        <span>
          <strong>نام:</strong>
          {name}
        </span>
        <span>
          <strong>شماره پرسنلی:</strong>
          {personnelNumber}
        </span>
        <span>
          <strong>مبلغ حقوق:</strong>
          {paymentValue} تومان
        </span>
      </div>
    </>
  );
}

export default EmployeeLineItem;

import "../styles/pages/LeaveReq.scss";

function LeaveReq() {
  return (
    <>
      <div className="leave-main-container">
        <h3>مرخصی</h3>
        <div className="leave-form">
          <select
            className="form-select form-select-lg mb-3"
            aria-label="Large select example"
          >
            <option selected>نوع مرخصی را انتخاب کنید</option>
            <option value="1">اضطراری</option>
            <option value="2">معمولی</option>
            <option value="3">اعیاد رسمی</option>
          </select>

          
        </div>
      </div>
    </>
  );
}

export default LeaveReq;

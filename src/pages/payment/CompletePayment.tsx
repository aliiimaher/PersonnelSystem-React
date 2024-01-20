import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/pages/payment/CompletePayment.scss";
import Button from "../../components/Button";
import InputBox from "../../components/InputBox";
import { useForm } from "react-hook-form";

function CompletePayment() {
  const { register, watch } = useForm();

  const submitPrice = () => {
    const data = { salary_value: watch("salary_value") };
    axios
      .post(
        `/salary/modify-slip/${selectedUser.employee_details.personnelNumber}/ `,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        alert("مبلغ با موفقیت تغییر یافت.");
        location.href = "/complete-payment/" + personnelNumber + "/";
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const { personnelNumber } = useParams();
  const [selectedUser, setSelectedUser] = useState<any>("");
  const [editPaymentValue, setEditPaymentValue] = useState(false);

  const fetchUser = () => {
    axios
      .get(`/salary/slip-details/${personnelNumber}/`)
      .then((response) => {
        setSelectedUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleConfirmPayment = () => {
    axios
      .post(
        "/salary/payment-slip/" +
          selectedUser.employee_details.personnelNumber +
          "/",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        alert("پرداخت با موفقیت انجام شد.");
        location.href = "/pay-salary/";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <div className="complete-payment-main-container">
        <div className="complete-payment-employee-full-info">
          <div className="complete-payment-employee-info">
            اطلاعات حساب کارمند انتخابی
            <hr />
            <table>
              <tr>
                <th className="complete-payment-th">
                  <div className="complete-payment-personal-info-items">
                    نام و نام خانوادگی:
                  </div>
                </th>
                <td>
                  <strong>
                    {selectedUser
                      ? selectedUser.employee_details.first_name +
                        " " +
                        selectedUser.employee_details.last_name
                      : ""}
                  </strong>
                </td>

                <th className="complete-payment-th">
                  <div className="complete-payment-personal-info-items">
                    شماره پرسنلی:
                  </div>
                </th>
                <td>
                  <strong>
                    {selectedUser
                      ? selectedUser.employee_details.personnelNumber
                      : ""}
                  </strong>
                </td>
              </tr>
            </table>
            <div className="complete-payment-price-confirm">
              <div>
                حقوق محاسبه شده:
                <strong> {selectedUser ? selectedUser.salary_value : 0}</strong>
              </div>
              <div className="complete-payment-edit-value">
                <Button
                  text="به روز رسانی"
                  btn100Width="yes"
                  onclick={() => setEditPaymentValue(!editPaymentValue)}
                />
                {editPaymentValue ? (
                  <>
                    <InputBox
                      placeHolder="مبلغ جدید"
                      reactHookFrom={register("salary_value")}
                    />
                    <Button
                      text="اعمال تغییر"
                      type="submit"
                      btn100Width="yes"
                      onclick={() => {
                        setEditPaymentValue(!editPaymentValue);
                        submitPrice();
                      }}
                    />
                  </>
                ) : (
                  ""
                )}
              </div>
              <Button
                text="تایید و پرداخت"
                backgroundColor="green"
                type="submit"
                onclick={handleConfirmPayment}
              />
            </div>
            <hr />
            <div className="complete-payment-employee-history-info">
              <Button
                text="مشاهده جزئیات سفر"
                onclick={() =>
                  (location.href =
                    "/history-trip/" + selectedUser.personnelNumber + "/")
                }
              />
              <Button
                text="مشاهده جزئیات مرخصی"
                onclick={() =>
                  (location.href =
                    "/history-leave/" + selectedUser.personnelNumber + "/")
                }
              />
              <Button
                text="مشاهده جزئیات حقوق"
                onclick={() =>
                  (location.href =
                    "/history-payment/" + selectedUser.personnelNumber + "/")
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompletePayment;

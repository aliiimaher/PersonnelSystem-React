import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/pages/payment/CompletePayment.scss";
import Button from "../../components/Button";
import InputBox from "../../components/InputBox";
import { useForm } from "react-hook-form";

function CompletePayment() {
  const { register, handleSubmit } = useForm();

  const submitPrice = (data: any) => {
    axios
      .post(
        ".../",
        data.paymentValue !== "" ? data.paymentValue : selectedUser.paymentValue
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const { personnelNumber } = useParams();
  const [selectedUser, setSelectedUser] = useState<any>();
  const [editPaymentValue, setEditPaymentValue] = useState(false);

  const fetchUser = () => {
    axios
      .get(`/.../${personnelNumber}/`)
      .then((response) => {
        setSelectedUser(response.data);
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
                    {/* {selectedUser.first_name} {selectedUser.last_name} */}
                  </strong>
                </td>

                <th className="complete-payment-th">
                  <div className="complete-payment-personal-info-items">
                    شماره پرسنلی:
                  </div>
                </th>
                <td>{/* <strong>{selectedUser.personnelNumber}</strong> */}</td>
              </tr>
            </table>
            <div className="complete-payment-price-confirm">
              <div>
                حقوق محاسبه شده: 100
                {/* <strong>{selectedUser.paymentValue}</strong> */}
              </div>
              <form onSubmit={handleSubmit(submitPrice)}>
                <div className="complete-payment-edit-value">
                  <Button
                    text="به روز رسانی"
                    btn100Width="yes"
                    onclick={() => {
                      setEditPaymentValue(!editPaymentValue);
                    }}
                  />
                  {editPaymentValue ? (
                    <InputBox
                      placeHolder="مبلغ جدید"
                      reactHookFrom={register("paymentValue")}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <Button
                  text="تایید و پرداخت"
                  backgroundColor="green"
                  type="submit"
                />
              </form>
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

import { useForm } from "react-hook-form";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";
import axios from "axios";
import "../../styles/pages/messaging/SendMsg.scss";
import handleCheckForLogin from "../../helper/handleCheckForLogin";
import { useEffect } from "react";

function SendMsg() {
  useEffect(() => {
    handleCheckForLogin();
  }, []);

  const { register, watch } = useForm();

  const handleSendMsg = () => {
    const data: any = {};
    data.personnel_number = watch("receiverPersonnelNumber");
    // data.title = watch("title");
    data.message_text = watch("body");
    axios
      .post("/messaging/", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        alert("پیام با موفقیت ارسال شد :)");
        location.href = "/profile/";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCancelMsg = () => {
    alert("ارسال پیام لغو شد.");
    window.location.href = "/profile/";
  };

  return (
    <>
      <div className="send-msg-main-container">
        <div className="send-msg-title">ارسال پیام</div>
        <div className="send-msg-form">
          <div className="send-msg-items">
            <div className="send-msg-form-item">
              <label>گیرنده</label>
              <InputBox
                placeHolder="شماره پرسنلی گیرنده را وارد کنید."
                reactHookFrom={register("receiverPersonnelNumber")}
              />
            </div>
            <div className="send-msg-form-item">
              <label>موضوع</label>
              <InputBox placeHolder="موضوع" reactHookFrom={register("title")} />
            </div>
          </div>
          <label>متن پیام</label>
          <div className="send-msg-body">
            <input
              type="text"
              {...register("body")}
              placeholder="سلام استاد ..."
            />
          </div>
          <div className="send-msg-btn">
            <Button text="لغو" onclick={() => handleCancelMsg()} />
            <Button
              text="ارسال"
              onclick={() => handleSendMsg()}
              backgroundColor="green"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SendMsg;

import "../styles/components/InputBox.scss";

interface Props {
  placeHolder?: string;
  icon?: string;
  reactHookFrom?: any;
  type?: "text" | "password" | "textarea";
}

function InputBox({ placeHolder, icon, reactHookFrom, type = "text" }: Props) {
  return (
    <>
      {type === "textarea" ? (
        <textarea
          className="inputBox-textarea"
          placeholder={placeHolder}
        ></textarea>
      ) : (
        <div
          className="input-group mb-3 rounded"
          style={{ backgroundColor: "#162041", padding: "8px" }}
        >
          {icon ? <img src={icon} alt="Image" className="rounded" /> : ""}
          <input
            type={type}
            className="form-control border-0"
            placeholder={placeHolder}
            aria-label="Username"
            dir="rtl"
            style={{
              marginRight: "2px",
              color: "#162041",
              outline: "none",
              boxShadow: "none",
            }}
            {...reactHookFrom}
            onChange={onchange}
          />
        </div>
      )}
    </>
  );
}

export default InputBox;

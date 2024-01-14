import "../styles/components/InputBox.scss";

interface Props {
  placeHolder?: string;
  icon?: string;
  reactHookFrom?: any;
  type?: "text" | "password" | "textarea";
  onchange?: any;
  value?: any;
}

function InputBox({
  placeHolder,
  icon,
  reactHookFrom,
  type = "text",
  onchange,
  value,
}: Props) {
  return (
    <>
      {type === "textarea" ? (
        <textarea
          className="inputBox-textarea"
          placeholder={placeHolder}
        ></textarea>
      ) : (
        <div
          className="input-group rounded"
          style={{ backgroundColor: "#162041", padding: "8px" }}
        >
          {icon ? <img src={icon} alt="Image" className="rounded" /> : ""}
          <input
            type={type}
            className="form-control border-0"
            placeholder={placeHolder}
            onChange={onchange}
            value={value}
            aria-label="Username"
            dir="rtl"
            style={{
              marginRight: "2px",
              color: "#162041",
              outline: "none",
              boxShadow: "none",
            }}
            {...reactHookFrom}
          />
        </div>
      )}
    </>
  );
}

export default InputBox;

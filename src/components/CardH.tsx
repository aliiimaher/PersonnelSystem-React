import { useEffect, useState } from "react";

interface Props {
  pic?: string;
  title: string;
  shortDescription?: string;
  btnText?: string;
  linkTo?: string;
  maxWidth?: number | string;
}

function CardH({
  pic,
  title,
  shortDescription,
  btnText,
  linkTo,
  maxWidth = 540,
}: Props) {
  const [picBorder, setPicBorder] = useState("-end");

  const generatePicBorder = () => {
    if (maxWidth !== 540) {
      setPicBorder("");
    } else {
      setPicBorder("-end");
    }
  };

  useEffect(() => {
    generatePicBorder();
  }, []);

  return (
    <>
      <div className="card mb-3" style={{ maxWidth: maxWidth }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={pic}
              className={"img-fluid rounded" + picBorder}
              alt="card img"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{shortDescription}</p>
            </div>
            {btnText ? (
              <a href={linkTo} className="btn btn-primary">
                {btnText}
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardH;

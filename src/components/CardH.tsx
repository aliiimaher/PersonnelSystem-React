interface Props {
  pic: string;
  title: string;
  shortDescription?: string;
  btnText: string;
  linkTo?: string;
}

function CardH({ pic, title, shortDescription, btnText, linkTo }: Props) {
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={pic} className="img-fluid rounded-end" alt="card img" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{shortDescription}</p>
            </div>
            <a href={linkTo} className="btn btn-primary">
              {btnText}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardH;

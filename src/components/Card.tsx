interface Props {
  pic: string;
  title: string;
  shortDescription?: string;
  btnText?: string;
  linkTo?: string;
}

function Card({ pic, title, shortDescription, btnText, linkTo }: Props) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={pic} className="card-img-top" alt="card img" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{shortDescription}</p>
          {linkTo ? (
            <a href={linkTo} className="btn btn-primary">
              {btnText}
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Card;

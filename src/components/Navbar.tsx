import "../styles/components/Navbar.scss";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg w-100"
        style={{ backgroundColor: "#162041" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            جواد
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 start-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  خانه
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/trip">
                  سفر
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/leave">
                  مرخصی
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/msg">
                  پیام
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/news">
                  آرشیو اخبار
                </a>
              </li>
            </ul>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="چی میخوای؟"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              بگرد
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

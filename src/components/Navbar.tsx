import "../styles/components/Navbar.scss";
import Button from "./Button";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg w-100"
        style={{ backgroundColor: "#162041" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            MZGRCO
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
            <ul className="navbar-nav  mb-lg-0 start-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  خانه
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/res-trip">
                  سفر
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/leave">
                  مرخصی
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/send-msg">
                  پیام
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/news-archive">
                  آرشیو اخبار
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ba" href="/aboutus">
                  درباره ما
                </a>
              </li>
              {localStorage.getItem("token") === undefined ||
              !localStorage.getItem("token") ? (
                <Button
                  text="ورود"
                  onclick={() => (window.location.href = "/login")}
                />
              ) : (
                <li className="nav-item">
                  <a className="nav-link" href="/profile">
                    <div style={{ color: "#da0404" }}>پروفایل</div>
                  </a>
                </li>
              )}
            </ul>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="چی میخوای؟"
              aria-label="Search"
            />
            <span style={{ width: "4px" }}></span>
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

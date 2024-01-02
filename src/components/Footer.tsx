import "../styles/components/Footer.scss";

import aliSvg from "../assets/pic/aliPic.jfif";
import msnSvg from "../assets/pic/msnPic.jfif";
import telegramSvg from "../assets/pic/telegram.svg";
import youtubeSvg from "../assets/pic/youtube.svg";
import instagramSvg from "../assets/pic/instagram.svg";

function Footer() {
  return (
    <>
      <div className="footer-main-container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav1"
              aria-controls="navbarNav1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></button>
            <div
              className="collapse navbar-collapse menu-items"
              id="navbarNav1"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 footer-col-3">
                <li className="nav-item">
                  <strong>شهر‌های نمایندگی</strong>
                </li>
                <li className="nav-item">عسلویه</li>
                <li className="nav-item">شیراز</li>
                <li className="nav-item">تهران</li>
                <li className="nav-item">اصفهان</li>
              </ul>
              <ul className="navbar-nav mb-2 mb-lg-0 footer-col-3">
                <li className="nav-item">
                  <strong>درباره ما</strong>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/aboutus">
                    مشاوره تلفنی
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    سوالات متداول
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    قوانین و مقررات
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/us">
                    تماس با ما
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav mb-2 mb-lg-0 footer-col-3">
                <li className="nav-item">
                  <strong>تلفن‌های تماس</strong>
                </li>
                <li className="nav-item">۰۹۰۲-۲۰۰-۹۲۹۷</li>
                <li className="nav-item">۰۹۳۵-۱۹۸-۵۱۹۳</li>
                <li className="nav-item">
                  <strong>پشتیبانی</strong>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="mailto:support@zabanlearn.com">
                    support@mzgc.ir
                  </a>
                </li>
              </ul>
              <div className="follow-us-in-social">
                <h5>ما را در شبکه‌های اجتماعی دنبال کنيد!</h5>
                <div className="follow-us-in-social-logos">
                  <a className="navbar-brand logo" href="#">
                    <img src={telegramSvg} alt="Logo" width="45" height="45" />
                  </a>
                  <a className="navbar-brand logo" href="#">
                    <img src={youtubeSvg} alt="Logo" width="45" height="30" />
                  </a>
                  <a className="navbar-brand logo" href="#">
                    <img src={instagramSvg} alt="Logo" width="45" height="45" />
                  </a>
                </div>
              </div>
              <div className="dev-pic">
                <img className="rounded" src={aliSvg} alt="pic" width="80" />
                <img className="rounded" src={msnSvg} alt="pic" width="80" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Footer;

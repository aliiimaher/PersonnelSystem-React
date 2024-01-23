import { Link } from "react-router-dom";
import axios from "axios";

import plusSvg from "../assets/pic/panel/plusSvg.svg";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "../styles/components/PanelSideBarMenu.scss";

function PanelSideBarMenu() {
  const thisUser: any = useContext(UserContext);
  var image_url = axios.defaults.baseURL + "/" + thisUser.profile_image;

  function handleLogout() {
    axios.post("/user/logout/", null, {
      headers: {
        Authorization: "Token " + window.localStorage.getItem("token"),
      },
    });
  }

  return (
    <>
      <div className="panel-side-bar-menu-container">
        <div className="panel-side-bar-menu-person">
          <img
            src={
              image_url !== `${axios.defaults.baseURL}/undefined`
                ? image_url
                : plusSvg
            }
            onClick={() => (window.location.href = "/panel-edit-info")}
          />
          <div className="panel-side-bar-menu-person-name">
            {thisUser.first_name} {thisUser.last_name}
          </div>
        </div>
        <li className="list-item-side-bar-menu">
          <Link to="/profile">داشبورد</Link>
        </li>
        {/* here */}
        {thisUser.role === "tripadmin" ? (
          <li className="list-item-side-bar-menu">
            <Link to="/accept-trip">مدیریت درخواست‌های سفر</Link>
          </li>
        ) : (
          ""
        )}
        {thisUser.role === "leaveadmin" ? (
          <li className="list-item-side-bar-menu">
            <Link to="/accept-leave">مدیریت درخواست‌های مرخصی</Link>
          </li>
        ) : (
          ""
        )}
        {thisUser.role === "boss" ? (
          <li className="list-item-side-bar-menu">
            <Link to="/recruitment">استخدام نیروی نگهداری</Link>
          </li>
        ) : (
          ""
        )}
        {thisUser.role === "paysalaryadmin" ? (
          <li className="list-item-side-bar-menu">
            <Link to="/pay-salary">پرداخت حقوق</Link>
          </li>
        ) : (
          ""
        )}
        {/* end here */}
        <li className="list-item-side-bar-menu">
          <Link
            to={location}
            onClick={() => {
              handleLogout();
              window.localStorage.removeItem("token");
              window.location.href = "/";
            }}
          >
            خروج از حساب کاربری
          </Link>
        </li>
      </div>
    </>
  );
}

export default PanelSideBarMenu;

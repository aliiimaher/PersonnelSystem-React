import { Link } from "react-router-dom";
import axios from "axios";

import plusSvg from "../assets/pic/panel/plusSvg.svg";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import "../styles/components/PanelSideBarMenu.scss";

function PanelSideBarMenu() {
  const thisUser: any = useContext(UserContext);
  const [isPaySalaryAdmin, setIsPaySalaryAdmin] = useState(false);
  var image_url = axios.defaults.baseURL + "/" + thisUser.profile_image;

  useEffect(() => {
    handleCheckRole();
    console.log(image_url);
  }, []);

  // ========== logout api ==========
  function handleLogout() {
    axios.post("/user/logout/", null, {
      headers: {
        Authorization: "Token " + window.localStorage.getItem("token"),
      },
    });
  }

  // ========== checkTheRole ==========
  const handleCheckRole = () => {
    if (thisUser.role === "paysalaryadmin") {
      setIsPaySalaryAdmin(true);
    } else {
      setIsPaySalaryAdmin(false);
    }
  };

  return (
    <>
      {/* {isLoading && <Loading />} */}
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
          <Link to="/panel-dashboard">داشبورد</Link>
        </li>
        <li className="list-item-side-bar-menu">
          <Link to="/panel-edit-info">ویرایش حساب کاربری</Link>
        </li>
        <li className="list-item-side-bar-menu">
          <Link to="/...">فاکتورها</Link>
        </li>
        {isPaySalaryAdmin ? (
          <li className="list-item-side-bar-menu">
            <Link to="/pay-salary">پرداخت حقوق</Link>
          </li>
        ) : (
          ""
        )}
        <li className="list-item-side-bar-menu">
          <Link to="/panel-my-courses">دوره‌های من</Link>
        </li>
        <li className="list-item-side-bar-menu">
          <Link
            to={location}
            onClick={() => {
              //   setIsLoading(true);
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

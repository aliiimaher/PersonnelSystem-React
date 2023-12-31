import "../../styles/pages/userPanel/Dashboard.scss";

import { useContext } from "react";
import PanelSideBarMenu from "../../components/PanelSideBarMenu";
import { UserContext } from "../../context/UserContext";

import personSvg from "../../assets/pic/person.svg";
import sexSvg from "../../assets/pic/panel/SexSvg.svg";
import callSvg from "../../assets/pic/panel/CallSvg.svg";
import mailSvg from "../../assets/pic/panel/MailSvg.svg";
import locationSvg from "../../assets/pic/panel/LocationSvg.svg";

function Dashboard() {
  const thisUser: any = useContext(UserContext);
  return (
    <>
      {/* {notif && <Notif />} */}
      <div className="panel-dashboard">
        <div className="panel-dashboard-right-side">
          <PanelSideBarMenu />
        </div>
        <div className="panel-dashboard-left-side">
          <div className="panel-dashboard-personal-info">
            اطلاعات حساب کاربری
            <hr />
            <table>
              <tr>
                <th className="dashboard-th">
                  <div className="panel-dashboard-personal-info-items">
                    <img src={personSvg} style={{ marginLeft: "8px" }} />
                    نام و نام خانوادگی:
                  </div>
                </th>
                <td>
                  <strong>
                    {thisUser.first_name} {thisUser.last_name}
                  </strong>
                </td>

                <th className="dashboard-th">
                  <div className="panel-dashboard-personal-info-items">
                    <img src={sexSvg} style={{ marginLeft: "8px" }} />
                    جنسیت:
                  </div>
                </th>
                <td>
                  <strong>{thisUser.sex}</strong>
                </td>
              </tr>
              <tr>
                <th className="dashboard-th">
                  <div className="panel-dashboard-personal-info-items">
                    <img src={callSvg} style={{ marginLeft: "8px" }} />
                    شماره تماس:
                  </div>
                </th>
                <td>
                  <strong>{thisUser.phone_number}</strong>
                </td>

                <th className="dashboard-th">
                  <div className="panel-dashboard-personal-info-items">
                    <img src={mailSvg} style={{ marginLeft: "8px" }} />
                    ایمیل:
                  </div>
                </th>
                <td>
                  <strong>{thisUser.email}</strong>
                </td>
              </tr>
              <tr>
                <th className="dashboard-th">
                  <div className="panel-dashboard-personal-info-items">
                    <img src={locationSvg} style={{ marginLeft: "8px" }} />
                    محل سکونت:
                  </div>
                </th>
                <td>
                  <strong>{thisUser.location}</strong>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;

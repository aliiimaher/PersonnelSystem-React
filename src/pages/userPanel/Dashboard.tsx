import PanelSideBarMenu from "../../components/PanelSideBarMenu";

function Dashboard() {
    
  return <>{notif && <Notif />}
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
              <img src={personSvg} style={{ marginLeft: "8px" }} />
              <div style={{ fontFamily: "KalamehThin" }}>
                نام و نام خانوادگی:
              </div>
            </th>
            <td>
              <strong>
                {thisUser.first_name} {thisUser.last_name}
              </strong>
            </td>

            <th className="dashboard-th">
              <img src={sexSvg} style={{ marginLeft: "8px" }} />
              <div style={{ fontFamily: "KalamehThin" }}>جنسیت:</div>
            </th>
            <td>
              <strong>{thisUser.sex}</strong>
            </td>
          </tr>
          <tr>
            <th className="dashboard-th">
              <img src={callSvg} style={{ marginLeft: "8px" }} />
              <div style={{ fontFamily: "KalamehThin" }}>شماره تماس:</div>
            </th>
            <td>
              <strong>{thisUser.phone_number}</strong>
            </td>

            <th className="dashboard-th">
              <img src={mailSvg} style={{ marginLeft: "8px" }} />
              <div style={{ fontFamily: "KalamehThin" }}>ایمیل:</div>
            </th>
            <td>
              <strong>{thisUser.email}</strong>
            </td>
          </tr>
          <tr>
            <th className="dashboard-th">
              <img src={locationSvg} style={{ marginLeft: "8px" }} />
              <div style={{ fontFamily: "KalamehThin" }}>محل سکونت:</div>
            </th>
            <td>
              <strong>{thisUser.location}</strong>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div></>;
}
export default Dashboard;

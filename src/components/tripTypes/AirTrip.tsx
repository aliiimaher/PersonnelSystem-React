import "../../styles/components/tripTypes/AirTrip.scss";
import airPlaneSvg from "../../assets/pic/trip/aiplane-svg.svg";

function AirTrip() {
  return (
    <div className="air-trip-main-container">
      <div className="air-trip-pic">
        <img src={airPlaneSvg} />
      </div>
    </div>
  );
}

export default AirTrip;

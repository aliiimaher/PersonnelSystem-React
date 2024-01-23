import "../../styles/components/tripTypes/VoyageTrip.scss";
import shipSvg from "../../assets/pic/trip/ship-svg.svg";

function VoyageTrip() {
  return (
    <div className="voyage-trip-main-container">
      <div className="voyage-trip-pic">
        <img src={shipSvg} />
      </div>
    </div>
  );
}

export default VoyageTrip;

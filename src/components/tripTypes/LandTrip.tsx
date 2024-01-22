import { useEffect, useState } from "react";
import seatSvg from "../../assets/pic/trip/seat-icon.svg";
import selectedSeatSvg from "../../assets/pic/trip/seat-icon-selected.svg";
import "../../styles/components/tripTypes/LandTrip.scss";
import noSeatSvg from "../../assets/pic/trip/no-seat.svg";

function LandTrip() {
  const [selectedSeat, setSelectedSeat] = useState("");

  const [seat1, setSeat1] = useState(false);
  const [seat2, setSeat2] = useState(false);
  const [seat3, setSeat3] = useState(false);
  const [seat4, setSeat4] = useState(false);
  const [seat5, setSeat5] = useState(false);
  const [seat6, setSeat6] = useState(false);
  const [seat7, setSeat7] = useState(false);
  const [seat8, setSeat8] = useState(false);
  const [seat9, setSeat9] = useState(false);
  const [seat10, setSeat10] = useState(false);
  const [seat11, setSeat11] = useState(false);
  const [seat12, setSeat12] = useState(false);
  const [seat13, setSeat13] = useState(false);
  const [seat14, setSeat14] = useState(false);
  const [seat15, setSeat15] = useState(false);
  const [seat16, setSeat16] = useState(false);
  const [seat17, setSeat17] = useState(false);
  const [seat18, setSeat18] = useState(false);
  const [seat19, setSeat19] = useState(false);
  const [seat20, setSeat20] = useState(false);
  const [seat21, setSeat21] = useState(false);
  const [seat22, setSeat22] = useState(false);
  const [seat23, setSeat23] = useState(false);
  const [seat24, setSeat24] = useState(false);
  const [seat25, setSeat25] = useState(false);
  const [seat26, setSeat26] = useState(false);
  const [seat27, setSeat27] = useState(false);
  const [seat28, setSeat28] = useState(false);
  const [seat29, setSeat29] = useState(false);
  const [seat30, setSeat30] = useState(false);
  const [seat31, setSeat31] = useState(false);
  const [seat32, setSeat32] = useState(false);
  const [seat33, setSeat33] = useState(false);
  const [seat34, setSeat34] = useState(false);
  const [seat35, setSeat35] = useState(false);
  const [seat36, setSeat36] = useState(false);
  const [seat37, setSeat37] = useState(false);
  const [seat38, setSeat38] = useState(false);
  const [seat39, setSeat39] = useState(false);
  const [seat40, setSeat40] = useState(false);

  const handleSaveTheSelectedSeat = () => {
    if (window.localStorage.getItem("selectedSeat") === null) {
      window.localStorage.setItem("selectedSeat", selectedSeat);
    } else {
      window.localStorage.removeItem("selectedSeat");
      window.localStorage.setItem("selectedSeat", selectedSeat);
    }
  };

  useEffect(() => {
    handleSaveTheSelectedSeat();
  }, [selectedSeat]);

  return (
    <div className="land-trip-main-container">
      <div className="land-trip-seats-row">
        <img
          src={seat1 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("1"), setSeat1(!seat1);
          }}
        />
        <img
          src={seat2 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("2"), setSeat2(!seat2);
          }}
        />
        <div></div>
        <div></div>
        <div></div>
        <img
          src={seat3 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("3"), setSeat3(!seat3);
          }}
        />
        <img
          src={seat4 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("4"), setSeat4(!seat4);
          }}
        />
      </div>
      <div className="land-trip-seats-row">
        <img
          src={seat5 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("5"), setSeat5(!seat5);
          }}
        />
        <img
          src={seat6 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("6"), setSeat6(!seat6);
          }}
        />
        <div></div>
        <div></div>
        <div></div>

        <img
          src={seat7 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("7"), setSeat7(!seat7);
          }}
        />
        <img
          src={seat8 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("8"), setSeat8(!seat8);
          }}
        />
      </div>
      <div className="land-trip-seats-row">
        <img
          src={seat9 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("9"), setSeat9(!seat9);
          }}
        />
        <img
          src={seat10 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("10"), setSeat10(!seat10);
          }}
        />
        <div></div>
        <div></div>
        <div></div>
        <img
          src={seat11 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("11"), setSeat11(!seat11);
          }}
        />
        <img
          src={seat12 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("12"), setSeat12(!seat12);
          }}
        />
      </div>
      <div className="land-trip-seats-row">
        <img
          src={seat13 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("13"), setSeat13(!seat13);
          }}
        />
        <img
          src={seat14 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("14"), setSeat14(!seat14);
          }}
        />
        <div></div>
        <div></div>
        <div></div>
        <img
          src={seat15 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("15"), setSeat15(!seat15);
          }}
        />
        <img
          src={seat16 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("16"), setSeat16(!seat16);
          }}
        />
      </div>
      <div className="land-trip-seats-row">
        <img
          src={seat17 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("17"), setSeat17(!seat17);
          }}
        />
        <img
          src={seat18 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("18"), setSeat18(!seat18);
          }}
        />
        <div></div>
        <div></div>
        <div></div>
        <img
          src={seat19 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("19"), setSeat19(!seat19);
          }}
        />
        <img
          src={seat20 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("20"), setSeat20(!seat20);
          }}
        />
      </div>
      <div className="land-trip-seats-row">
        <img src={noSeatSvg} alt="" className="land-trip-seats-row-no" />
        <img src={noSeatSvg} alt="" className="land-trip-seats-row-no" />
        <div></div>
        <div></div>
        <div></div>
        <img
          src={seat21 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("21"), setSeat21(!seat21);
          }}
        />
        <img
          src={seat22 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("22"), setSeat22(!seat22);
          }}
        />
      </div>
      <div className="land-trip-seats-row">
        <img src={noSeatSvg} alt="" className="land-trip-seats-row-no" />
        <img src={noSeatSvg} alt="" className="land-trip-seats-row-no" />
        <div></div>
        <div></div>
        <div></div>
        <img
          src={seat23 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("23"), setSeat23(!seat23);
          }}
        />
        <img
          src={seat24 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("24"), setSeat24(!seat24);
          }}
        />
      </div>
      <div className="land-trip-seats-row">
        <img
          src={seat25 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("25"), setSeat25(!seat25);
          }}
        />
        <img
          src={seat26 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("26"), setSeat26(!seat26);
          }}
        />
        <div></div>
        <div></div>
        <div></div>
        <img
          src={seat27 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("27"), setSeat27(!seat27);
          }}
        />
        <img
          src={seat28 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("28"), setSeat28(!seat28);
          }}
        />
      </div>
      <div className="land-trip-seats-row">
        <img
          src={seat29 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("29"), setSeat29(!seat29);
          }}
        />
        <img
          src={seat30 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("30"), setSeat30(!seat30);
          }}
        />
        <div></div>
        <div></div>
        <div></div>
        <img
          src={seat31 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("31"), setSeat31(!seat31);
          }}
        />
        <img
          src={seat32 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("32"), setSeat32(!seat32);
          }}
        />
      </div>
      <div className="land-trip-seats-row">
        <img
          src={seat33 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("33"), setSeat33(!seat33);
          }}
        />
        <img
          src={seat34 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("34"), setSeat34(!seat34);
          }}
        />
        <div></div>
        <div></div>
        <div></div>
        <img
          src={seat35 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("35"), setSeat35(!seat35);
          }}
        />
        <img
          src={seat36 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("36"), setSeat36(!seat36);
          }}
        />
      </div>
      <div className="land-trip-seats-row">
        <img
          src={seat37 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("37"), setSeat37(!seat37);
          }}
        />
        <img
          src={seat38 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("38"), setSeat38(!seat38);
          }}
        />
        <div></div>
        <div></div>
        <div></div>
        <img
          src={seat39 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("39"), setSeat39(!seat39);
          }}
        />
        <img
          src={seat40 ? selectedSeatSvg : seatSvg}
          onClick={() => {
            setSelectedSeat("40"), setSeat40(!seat40);
          }}
        />
      </div>
    </div>
  );
}

export default LandTrip;

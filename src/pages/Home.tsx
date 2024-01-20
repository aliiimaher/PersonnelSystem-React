import pic1 from "../assets/pic/asalooye1.jpg";
import Card from "../components/Card";
import CardH from "../components/CardH";
import Slider from "../components/Slider";
import "../styles/pages/Home.scss";

function Home() {
  return (
    <>
      <div className="home-container">
        <img src={pic1} width="100%" />
        <div className="home-down-side">
          <div className="home-news-slider">
            <div
              className="home-news-slider-title"
              onClick={() => (location.href = "/news-archive")}
            >
              تازه‌ها و رویدادها
            </div>
            <Slider />
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Home;

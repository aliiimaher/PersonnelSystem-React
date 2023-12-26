import pic1 from "../assets/pic/asalooye1.jpg";
import Card from "../components/Card";
import CardH from "../components/CardH";

function Home() {
  return (
    <>
      <div className="home-container">
        <img src={pic1} width="100%" />
        <div>
          <a href="/news">تازه‌ها و رویدادها</a>
          <div>
            <Card pic={pic1} title="عسلویه" btnText="برو به خبر" />
            <hr />
            <CardH pic={pic1} title="عسلویه" btnText="برو به خبر" linkTo="/t" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

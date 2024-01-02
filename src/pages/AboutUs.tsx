import "../styles/pages/AboutUs.scss";

import aliImg from "../assets/pic/aliPic.jfif";
import msnImg from "../assets/pic/msnPic.jfif";

function AboutUs() {
  return (
    <>
      <div className="about-us-container">
        <div className="about-us-person">
          <img src={aliImg} alt="" />
          <div>
            <a href="https://github.com/aliiimaher">
              <i>Ali Maher</i>
            </a>
          </div>
          Front-End
        </div>
        <div className="about-us-person">
          <img src={msnImg} alt="" />
          <div>
            <a href="https://github.com/msnzmt">
              <i>Mohsen Zahmatkesh</i>
            </a>
          </div>
          Back-End
        </div>
      </div>
    </>
  );
}

export default AboutUs;

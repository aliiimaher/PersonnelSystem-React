import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Card from "./Card";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css";

function Slider() {
  const [news, setNews] = useState([] as any[]);

  const fetchNews = () => {
    axios
      .get("/news/list/")
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 2000 }}
      breakpoints={{
        1200: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
      }}
    >
      {news.map((item) => {
        return (
          <SwiperSlide
            key={item.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              title={item.title}
              shortDescription={item.content}
              pic={item.image}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Slider;

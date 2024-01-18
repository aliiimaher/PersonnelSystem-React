import axios from "axios";
import CardH from "../components/CardH";
import "../styles/pages/NewsArchive.scss";
import { useEffect, useState } from "react";
import test from "../assets/pic/aliPic.jfif";

function NewsArchive() {
  const [news, setNews] = useState([] as any[]);
  const fetchAllNews = () => {
    axios
      .get("/.../")
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchAllNews();
  }, []);

  return (
    <>
      <div className="news-archive-main-container">
        <div className="news-archive-title">آرشیو اخبار</div>
        <div className="news-archive-news-list">
          {news.map((item) => {
            return (
              <CardH
                title={item.title}
                shortDescription={item.shortDescription}
                pic={item.pic}
              />
            );
          })}

          <CardH
            maxWidth={"100%"}
            title="تست"
            shortDescription="این تنها یک متن ساختگی از علی ماهر هست و هیچ محتوایی ندارد."
            pic={test}
          />
          <CardH
            maxWidth={"100%"}
            title="تست"
            shortDescription="این تنها یک متن ساختگی از علی ماهر هست و هیچ محتوایی ندارد."
          />
          <CardH
            maxWidth={"100%"}
            title="تست"
            shortDescription="این تنها یک متن ساختگی از علی ماهر هست و هیچ محتوایی ندارد."
          />
          <CardH
            maxWidth={"100%"}
            title="تست"
            shortDescription="این تنها یک متن ساختگی از علی ماهر هست و هیچ محتوایی ندارد."
          />
        </div>
      </div>
    </>
  );
}

export default NewsArchive;

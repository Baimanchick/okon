import React, { useEffect, useState } from "react";
import "../css/about.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AboutMePage() {
  interface blogsI {
    title: string;
    text: string;
    img: string;
    img1: string;
    text1: string;
  }
  const navigate = useNavigate();
  const [news, setNews] = useState<blogsI[]>([]);
  const [visibleBlogs, setVisibleBlogs] = useState<number>(3);

  const fetchNews = async () => {
    try {
      const response = await axios.get(`https://tao-db.vercel.app/blogs`);
      setNews(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="main-content">
      <header className="about-header">
        <div className="about-title">
          <span>
            <strong onClick={() => navigate("/")}>НА ГЛАВНУЮ</strong> ► ОБО МНЕ
          </span>
        </div>
        <h2 className="about-h2">Обо мне</h2>
      </header>

      <section className="about-section">
        <div className="about-container">
          <div className="about-wrapper-right">
            <img
              src="https://sputnik.kg/img/07e5/0c/1e/1060856003_535:0:2583:2048_1920x0_80_0_0_bc0f770c953937a7b88ec694a41ac910.jpg"
              className="about-img"
            />
          </div>
          <div className="about-wrapper-left">
            <h3 className="about-h3">Биография.</h3>
            <div className="title-about">
              <span>Образование:</span>
              <p>
                Я родилась 24 октября 1972 года в селе Ак-Суу Аксыйского района
                Джалал-Абадской области. Мое образование высшее, в 1993 году я
                успешно окончила Ошский Технологический техникум по
                специальности "Техник по прядильному производству". Затем, в
                2001 году, завершила обучение в Ошском Технологическом
                Университете по специальности "Бухгалтерский учет и аудит".
              </p>
            </div>
            <div className="title-about">
              <span>Трудовая деятельность:</span>
              <p>
                Мой путь в трудовой сфере начался в 1989 году, когда я
                приступила к работе ассистентом воспитателя в детском саду №59
                г. Ош. С 1990 по 2016 годы я была частным предпринимателем. В
                последующем, с 2016 по 2021 год, служила депутатом городского
                кенеша г. Ош. Ноябрь 2021 года принес мне избрание депутатом
                Жогорку Кенеша Кыргызской Республики VII созыва от политической
                партии "Ата-Журт Кыргызстан".
              </p>
            </div>
            <div className="title-about">
              <span>Личные достижения:</span>
              <p>
                Мои заслуги и вклад в развитие туризма были отмечены наградами,
                такими как Грамота Ошской облгосадминистрации (2001 г.). Звание
                "Лучший предприниматель 2001 года" в конкурсе "Бизнес Шанс",
                организованном Правительством Кыргызской Республики, также стало
                частью моего профессионального пути. Мой вклад был отмечен
                грамотами от Государственного Комитета по туризму, спорту и
                молодежной политике Кыргызской Республики (2003 г.) и
                Государственной Таможенной Службы при Правительстве Кыргызской
                Республики (2011 г.). Замужем, я являюсь матерью четверых детей
                - одной дочери и трех сыновей.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="news-main">
        <h2> Новости</h2>
        <div className="news-container">
          <div className="news-card-container">
            {news.slice(0, visibleBlogs).map((item, index) => (
              <div onClick={() => navigate("/detail")} className="news-card">
                <div className="news-date"></div>
                <div className="news-desc-container">
                  <span className="news-desc">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="news-button-container">
          <button onClick={() => navigate("/blog")} className="news-button">
            Все новости ⇨
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;

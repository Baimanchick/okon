import React from "react";
import Gul from "../css/images/gulshar.jpg";
import "../css/home.scss";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="main-content">
      {/*  */}
      <div className="bio-main">
        <div className="bio-container">
          {/*  */}
          <div className="bio-wrapper-left">
            <img src={Gul} />
          </div>

          <div className="bio-wrapper-right">
            <div className="bio-title">
              <h2 className="bio-h2">Гульшаркан Оконовна</h2>
              <h3 className="bio-h3">Бизнесвумен. Депутат ЖК. </h3>
              <p className="bio-p-1">
                У каждого человека есть свое, уникальное предназначение. Мы
                должны стремиться оставить после себя что-то поистине хорошее. В
                этом есть суть формирования культурного общества.
              </p>
              <p className="bio-p-2">
                Моя задача минимум, развивать любимый спорт на максимум.
                Помогать в реализации футбольных событий Всероссийского масштаба
                и стремиться к улучшению мира вокруг себя.
              </p>
              <button onClick={() => navigate("/about")} className="bio-button">
                Обо мне ⇨
              </button>
            </div>
          </div>

          {/*  */}

          {/*  */}
        </div>
      </div>

      <div className="proj-main">
        <h2>Проекты</h2>
        <div className="proj-container">
          <div className="proj-card-container">
            <div className="proj-card">
              <div className="proj-img">
                <img src="https://data.kaktus.media/image/big/2023-06-09_17-30-46_355822.jpg" />
              </div>
              <div className="proj-title">
                <h3>Парламент</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellendus, dignissimos.
                </p>
                <button>Подробнее</button>
              </div>
            </div>
            <div className="proj-card">
              <div className="proj-img">
                <img src="https://data.kaktus.media/image/big/2023-06-09_17-30-46_355822.jpg" />
              </div>
              <div className="proj-title">
                <h3>Парламент</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellendus, dignissimos.
                </p>
                <button>Подробнее</button>
              </div>
            </div>
            <div className="proj-card">
              <div className="proj-img">
                <img src="https://data.kaktus.media/image/big/2023-06-09_17-30-46_355822.jpg" />
              </div>
              <div className="proj-title">
                <h3>Парламент</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellendus, dignissimos.
                </p>
                <button>Подробнее</button>
              </div>
            </div>
          </div>
        </div>

        <div className="proj-button-container">
          <button onClick={() => navigate("/project")} className="proj-button">
            Все проекты ⇨
          </button>
        </div>
      </div>

      <div className="news-main">
        <h2>Новости</h2>
        <div className="news-container">
          <div className="news-card-container">
            <div className="news-card">
              <div className="news-date">
                <span>11.07.2023</span>
              </div>
              <div className="news-desc-container">
                <span className="news-desc"> Lorem ipsum dolor sit amet.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="news-button-container">
          <button onClick={() => navigate("/blog")} className="news-button">
            Все новости ⇨
          </button>
        </div>
      </div>

      {/*  */}
    </div>
  );
}

export default HomePage;

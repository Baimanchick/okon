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
              <h3 className="bio-h3">Бизнесвумен. Депутат ЖК. Красивая.</h3>
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
      {/*  */}
    </div>
  );
}

export default HomePage;

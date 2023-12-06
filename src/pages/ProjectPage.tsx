import React from "react";
import "../css/project.scss";
import { useNavigate } from "react-router-dom";

function ProjectPage() {
  const navigate = useNavigate();
  return (
    <div className="main-content">
      <header className="about-header">
        <div className="about-title">
          <span>
            <strong onClick={() => navigate("/")}>НА ГЛАВНУЮ</strong> ► ПРОЕКТЫ
          </span>
        </div>
        <h2 className="about-h2">Проекты</h2>
      </header>

      <div className="proj-page-main">
        <div className="proj-page-container">
          <div className="proj-page-card-container">
            <div
              onClick={() => navigate("/projectdetail")}
              className="proj-page-card"
            >
              <div className="proj-page-img">
                <img src="https://data.kaktus.media/image/big/2023-06-09_17-30-46_355822.jpg" />
              </div>
              <div className="proj-page-title">
                <h3>Парламент</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellendus, dignissimos.
                </p>
                <button>Подробнее</button>
              </div>
            </div>
            <div
              onClick={() => navigate("/projectdetail")}
              className="proj-page-card"
            >
              <div className="proj-page-img">
                <img src="https://data.kaktus.media/image/big/2023-06-09_17-30-46_355822.jpg" />
              </div>
              <div className="proj-page-title">
                <h3>Парламент</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellendus, dignissimos.
                </p>
                <button>Подробнее</button>
              </div>
            </div>
            <div
              onClick={() => navigate("/projectdetail")}
              className="proj-page-card"
            >
              <div className="proj-page-img">
                <img src="https://data.kaktus.media/image/big/2023-06-09_17-30-46_355822.jpg" />
              </div>
              <div className="proj-page-title">
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
        <div className="proj-page-container">
          <div className="proj-page-card-container">
            <div
              onClick={() => navigate("/projectdetail")}
              className="proj-page-card-special"
            >
              <div className="proj-page-img">
                <img src="https://data.kaktus.media/image/big/2023-06-09_17-30-46_355822.jpg" />
              </div>
              <div className="proj-page-title">
                <h3>Парламент</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellendus, dignissimos.
                </p>
                <button>Подробнее</button>
              </div>
            </div>
            <div
              onClick={() => navigate("/projectdetail")}
              className="proj-page-card-special"
            >
              <div className="proj-page-img">
                <img src="https://data.kaktus.media/image/big/2023-06-09_17-30-46_355822.jpg" />
              </div>
              <div className="proj-page-title">
                <h3>Парламент</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellendus, dignissimos.
                </p>
                <button>Подробнее</button>
              </div>
            </div>
            <div
              onClick={() => navigate("/projectdetail")}
              className="proj-page-card-special"
            >
              <div className="proj-page-img">
                <img src="https://data.kaktus.media/image/big/2023-06-09_17-30-46_355822.jpg" />
              </div>
              <div className="proj-page-title">
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
      </div>
    </div>
  );
}

export default ProjectPage;

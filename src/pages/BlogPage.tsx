import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/blog.scss";

function BlogPage() {
  const navigate = useNavigate();
  return (
    <div className="main-content">
      <header className="about-header">
        <div className="about-title">
          <span>
            <strong onClick={() => navigate("/")}>НА ГЛАВНУЮ</strong> ► БЛОГ
          </span>
        </div>
        <h2 className="about-h2">Блог</h2>
      </header>

      <div className="blog-card-main">
        <div className="blog-card-container">
          <div className="blog-card">
            <img
              src="https://but-vv.ru/wp-content/uploads/2023/11/vitalij-but.-futbol-8h8.jpg"
              className="blog-card-img"
            />
            <div className="blog-card-title-container">
              <h3>Футбол в формате 8х8</h3>
              <p>
                Прямо сейчас Новороссийская Федерация футбола проводит отличный
                турнир по футболу в формате 8х8 Приоритет — детский футбол Итоги
                городского детского первенства Главной особенностью соревнований
                является тот факт, что все игры проходят по будням в вечернее
                время, что само по себе…
              </p>
            </div>
          </div>

          <div className="blog-card">
            <img
              src="https://but-vv.ru/wp-content/uploads/2023/11/vitalij-but.-futbol-8h8.jpg"
              className="blog-card-img"
            />
            <div className="blog-card-title-container">
              <h3>Футбол в формате 8х8</h3>
              <p>
                Прямо сейчас Новороссийская Федерация футбола проводит отличный
                турнир по футболу в формате 8х8 Приоритет — детский футбол Итоги
                городского детского первенства Главной особенностью соревнований
                является тот факт, что все игры проходят по будням в вечернее
                время, что само по себе…
              </p>
            </div>
          </div>

          <div className="blog-card">
            <img
              src="https://but-vv.ru/wp-content/uploads/2023/11/vitalij-but.-futbol-8h8.jpg"
              className="blog-card-img"
            />
            <div className="blog-card-title-container">
              <h3>Футбол в формате 8х8</h3>
              <p>
                Прямо сейчас Новороссийская Федерация футбола проводит отличный
                турнир по футболу в формате 8х8 Приоритет — детский футбол Итоги
                городского детского первенства Главной особенностью соревнований
                является тот факт, что все игры проходят по будням в вечернее
                время, что само по себе…
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-button-container">
        <button>Загрузить еще</button>
      </div>

      {/*  */}
    </div>
  );
}

export default BlogPage;

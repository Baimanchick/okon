import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/blog.scss";

function test() {
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
          <div onClick={() => navigate("/detail")} className="blog-card">
            <img
              src="https://st-1.akipress.org/cdn-st-0/qdX/P/2141725.9bb9f0e305be4d88f468a1bf98ca6060.jpg"
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

          <div onClick={() => navigate("/detail")} className="blog-card">
            <img
              src="https://st-1.akipress.org/cdn-st-0/qdX/P/2141725.9bb9f0e305be4d88f468a1bf98ca6060.jpg"
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

          <div onClick={() => navigate("/detail")} className="blog-card">
            <img
              src="https://st-1.akipress.org/cdn-st-0/qdX/P/2141725.9bb9f0e305be4d88f468a1bf98ca6060.jpg"
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

          <div onClick={() => navigate("/detail")} className="blog-card">
            <img
              src="https://st-1.akipress.org/cdn-st-0/qdX/P/2141725.9bb9f0e305be4d88f468a1bf98ca6060.jpg"
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

export default test;

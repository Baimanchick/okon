import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import "../css/projectdetailpage.scss";

function ProjectDetailPage() {
  let src = "https://www.youtube.com/embed/dQw4w9WgXcQ?si=3MEPsuCOsTD6Rs9U";

  return (
    <div className="main-content">
      <div className="project-detail-container">
        <div className="project-detail-wrapper-left">
          {/*  */}
          <div className="project-detail-container-left">
            <div className="project-detail-title-container">
              <h2 className="project-detail-h2">
                В Новороссийске установлен рекорд
              </h2>
              <p className="project-detail-p">
                Этой осенью в Широкой Балке состоялся самый масштабный турнир за
                всё время проведения детско-юношеских соревнований в
                Новороссийске 94 команды из разных уголков страны приняли
                участие в традиционном осеннем турнире по футболу Буткап. Море
                Спорта.
              </p>
              <img
                src="https://but-vv.ru/wp-content/uploads/2023/11/futbol-v-novorossijske.jpg"
                className="project-detail-img"
              />
              <p className="project-detail-p">
                Соревнования проходили в два этапа, участвовали футболисты в
                возрастных категориях 2007-2015 г.р
              </p>
              <img
                src="https://but-vv.ru/wp-content/uploads/2023/11/samyj-massovyj-turnir-v-novorossijske.jpg"
                className="project-detail-img"
              />
            </div>
            <iframe
              className="video-container"
              src={src}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="project-detail-utils-container">
              <h3>Поделитесь с друзьями</h3>
              <div className="project-detail-icons">
                <a href="">
                  <FaFacebook className="icon-item" />
                </a>

                <a href="">
                  <FaTelegramPlane className="icon-item" />
                </a>

                <a href="">
                  <IoLogoWhatsapp className="icon-item" />
                </a>
              </div>
            </div>
            <div className="project-detail-pagination-main">
              <div className="project-detail-pagination-container">
                <div className="project-detail-pagination-wrapper-left">
                  <img
                    src="https://but-vv.ru/wp-content/uploads/2023/08/photo_2023-08-24_16-36-03.jpg"
                    alt=""
                    className="project-detail-pegination-img"
                  />
                  <div className="project-detail-pagination-title-container-left">
                    <span className="project-detail-pagination-span">
                      ПРЕД. ЗАПИСЬ
                    </span>
                    <p className="project-detail-pagination-p">
                      Приоритет - детский футбол
                    </p>
                    <span className="project-detail-pagination-none-span">
                      ПРЕД
                    </span>
                  </div>
                </div>
                <hr className="project-detail-pagination-hr" />
                <div className="project-detail-pagination-wrapper-right">
                  <div className="project-detail-pagination-title-container-right">
                    <span className="project-detail-pagination-span">
                      СЛЕД. ЗАПИСЬ
                    </span>
                    <p className="project-detail-pagination-p">
                      Футбол в формате 8х8
                    </p>
                    <span className="project-detail-pagination-none-span">
                      СЛЕД
                    </span>
                  </div>
                  <img
                    src="https://but-vv.ru/wp-content/uploads/2023/07/photo_2023-07-03_17-55-22.jpg"
                    alt=""
                    className="project-detail-pegination-img"
                  />
                </div>
              </div>
            </div>
            <hr className="project-detail-hr" />
            <div className="project-detail-similar-main">
              <h2 className="project-detail-similar-h2">Новые записи</h2>
              <div className="project-detail-similar-container">
                <div className="project-detail-simialr-card">
                  <img
                    src="https://but-vv.ru/wp-content/uploads/2023/11/vitalij-but.-futbol.-novorossijsk.jpg"
                    alt=""
                  />
                  <div className="project-detail-similar-card-title">
                    <p>Приоритет — детский футбол</p>
                  </div>
                </div>
                <div className="project-detail-simialr-card">
                  <img
                    src="https://but-vv.ru/wp-content/uploads/2023/11/vitalij-but.-futbol.-novorossijsk.jpg"
                    alt=""
                  />
                  <div className="project-detail-similar-card-title">
                    <p>Приоритет — детский футбол</p>
                  </div>
                </div>
                <div className="project-detail-simialr-card">
                  <img
                    src="https://but-vv.ru/wp-content/uploads/2023/11/vitalij-but.-futbol.-novorossijsk.jpg"
                    alt=""
                  />
                  <div className="project-detail-similar-card-title">
                    <p>Приоритет — детский футбол</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        <div className="project-detail-wrapper-right">
          <hr />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailPage;

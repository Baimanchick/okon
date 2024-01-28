import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import "../css/detail.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DetailPage() {
  interface projectsI {
    _id: any;
    title: string;
    text: string;
    img: string;
    img1: string;
    text1: string;
    link: string;
  }
  let link = "https://www.youtube.com/embed/dQw4w9WgXcQ?si=3MEPsuCOsTD6Rs9U";

  return (
    <div className="main-content">
      <div className="detail-container">
        <div className="detail-wrapper-left">
          {/*  */}
          <div className="detail-container-left">
            <div className="detail-title-container">
              <h2 className="detail-h2">В Новороссийске установлен рекорд</h2>
              <p className="detail-p">
                Этой осенью в Широкой Балке состоялся самый масштабный турнир за
                всё время проведения детско-юношеских соревнований в
                Новороссийске 94 команды из разных уголков страны приняли
                участие в традиционном осеннем турнире по футболу Буткап. Море
                Спорта.
              </p>
              <img
                src="https://but-vv.ru/wp-content/uploads/2023/11/futbol-v-novorossijske.jpg"
                className="detail-img"
              />
              <p className="detail-p">
                Соревнования проходили в два этапа, участвовали футболисты в
                возрастных категориях 2007-2015 г.р
              </p>
              <img
                src="https://but-vv.ru/wp-content/uploads/2023/11/samyj-massovyj-turnir-v-novorossijske.jpg"
                className="detail-img"
              />
            </div>

            <iframe
              className="video-container"
              src={link}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <div className="detail-utils-container">
              <h3>Поделитесь с друзьями</h3>
              <div className="detail-icons">
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
            <div className="detail-pagination-main">
              <div className="detail-pagination-container">
                <div className="detail-pagination-wrapper-left">
                  <img
                    src="https://but-vv.ru/wp-content/uploads/2023/08/photo_2023-08-24_16-36-03.jpg"
                    alt=""
                    className="detail-pegination-img"
                  />
                  <div className="detail-pagination-title-container-left">
                    <span className="detail-pagination-span">ПРЕД. ЗАПИСЬ</span>
                    <p className="detail-pagination-p">
                      Приоритет - детский футбол
                    </p>
                    <span className="detail-pagination-none-span">ПРЕД</span>
                  </div>
                </div>
                <hr className="detail-pagination-hr" />
                <div className="detail-pagination-wrapper-right">
                  <div className="detail-pagination-title-container-right">
                    <span className="detail-pagination-span">СЛЕД. ЗАПИСЬ</span>
                    <p className="detail-pagination-p">Футбол в формате 8х8</p>
                    <span className="detail-pagination-none-span">СЛЕД</span>
                  </div>
                  <img
                    src="https://but-vv.ru/wp-content/uploads/2023/07/photo_2023-07-03_17-55-22.jpg"
                    alt=""
                    className="detail-pegination-img"
                  />
                </div>
              </div>
            </div>
            <hr className="detail-hr" />
            <div className="detail-similar-main">
              <h2 className="detail-similar-h2">Похожие записи</h2>
              <div className="detail-similar-container">
                <div className="detail-simialr-card">
                  <img
                    src="https://but-vv.ru/wp-content/uploads/2023/11/vitalij-but.-futbol.-novorossijsk.jpg"
                    alt=""
                  />
                  <div className="detail-similar-card-title">
                    <p>Приоритет — детский футбол</p>
                  </div>
                </div>
                <div className="detail-simialr-card">
                  <img
                    src="https://but-vv.ru/wp-content/uploads/2023/11/vitalij-but.-futbol.-novorossijsk.jpg"
                    alt=""
                  />
                  <div className="detail-similar-card-title">
                    <p>Приоритет — детский футбол</p>
                  </div>
                </div>
                <div className="detail-simialr-card">
                  <img
                    src="https://but-vv.ru/wp-content/uploads/2023/11/vitalij-but.-futbol.-novorossijsk.jpg"
                    alt=""
                  />
                  <div className="detail-similar-card-title">
                    <p>Приоритет — детский футбол</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        <div className="detail-wrapper-right">
          <hr />
        </div>
      </div>
    </div>
  );
}

export default DetailPage;

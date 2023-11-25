import React from "react";
import "../css/about.scss";
import { useNavigate } from "react-router-dom";

function AboutMePage() {
  const navigate = useNavigate();
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
                — Московский государственный институт физической культуры. —
                Кубанский государственный технологический университет.
                Специальность: «Государственное и муниципальное управление». —
                Московский государственный строительный университет.
                Специальность: «Инженер теплогазоснабжения и вентиляции».
              </p>
            </div>
            <div className="title-about">
              <span>Трудовая деятельность:</span>
              <p>
                1989-1998 гг.- профессиональный футболист. Юношеские сборные
                СССР, ФК «Динамо» Москва, ФК «Локомотив» Москва, ФК «Черноморец»
                Новороссийск, ФК «Арсенал» Тула. 1998-2007гг.-
                предпринимательская деятельность. 2007-2010 гг.- заместитель
                генерального директора ОАО «Юггазсервис». (Новороссийскгоргаз)
                2010-2017гг.- начальник Новороссийского участка ОАО
                «Краснодаркрайгаз» (АО «Газпром газораспределение Краснодар»).
                2011-2019гг.-начальник Новороссийского участка ООО «Газпром
                межрегионгаз Краснодар». С 2018 г. по настоящее время –
                генеральный директор ФК «Черноморец». C 2015-2019 гг.-депутат
                городской Думы VI созыва по 16 избирательному округу г.
                Новороссийск. Возглавлял комитет по курортам, туризму и спорту.
              </p>
            </div>
            <div className="title-about">
              <span>Личные достижения:</span>
              <p>
                Мастер спорта СССР, бронзовый призер чемпионата мира в составе
                молодежной сборной СССР (1991г). Награжден почетным знаком
                Краснодарской краевой федерации футбола «За вклад в развитие
                футбола на Кубани» Присвоено почетное звание «Патриот
                Новороссийска». Награжден медалью «Патриот Новороссийск».
                Награжден медалью «Князь Григорий Потемкин». Вручено
                удостоверение «Ветеран труда» от 21 августа 2018гг.
              </p>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}

export default AboutMePage;

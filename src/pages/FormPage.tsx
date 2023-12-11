import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/form.scss";

function FormPage() {
  const navigate = useNavigate();
  return (
    <div className="main-content">
      {/*  */}

      <header className="about-header">
        <div className="about-title">
          <span>
            <strong onClick={() => navigate("/")}>НА ГЛАВНУЮ</strong> ►
            ОБРАЩЕНИЕ
          </span>
        </div>
        <h2 className="about-h2">Обращение</h2>
      </header>

      <section className="about-section">
        <div className="about-container">
          <div className="about-wrapper-right"></div>
          <div className="about-wrapper-left">
            <h3 className="about-h3">
              Почему обращение народа к депутату очень важно?{" "}
            </h3>
            <div className="title-about">
              <span>Представление интересов избирателей:</span>
              <p>
                Депутаты являются представителями народа в законодательной
                власти. Обращения со стороны избирателей позволяют депутатам
                узнавать о проблемах, потребностях и интересах своих
                избирателей.
              </p>
            </div>
            <div className="title-about">
              <span>Открытость и прозрачность:</span>
              <p>
                Обращения народа к депутатам способствуют созданию открытого
                общества, где политики обязаны отчитываться перед своими
                избирателями. Это способствует прозрачности в принятии решений и
                предотвращает коррупцию.
              </p>
            </div>
            <div className="title-about">
              <span>Контроль за деятельностью депутатов:</span>
              <p>
                Обращения и запросы народа позволяют обществу следить за
                деятельностью депутатов, их голосованием, инициативами и
                позициями. Это обеспечивает ответственность перед избирателями.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="form-main">
        <div className="form-container">
          <p>Я рада услышать ваше мнение :)</p>
          <form className="form">
            <label>Ф.И.О</label>
            <input type="text" className="input" placeholder="Ф.И.О" />
            <label>Обращение</label>
            <input
              type="text"
              className="input-special"
              placeholder="Обращение"
            />
            <label>Почта</label>
            <input type="text" className="input" placeholder="@gmail.com" />
            <button>Отправить</button>
          </form>
        </div>
      </div>

      {/*  */}
    </div>
  );
}

export default FormPage;

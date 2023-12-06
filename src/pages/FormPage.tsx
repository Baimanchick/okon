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

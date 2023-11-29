import React from "react";
import "../css/contact.scss";
import { useNavigate } from "react-router-dom";

function ContactPage() {
  const navigate = useNavigate();
  return (
    <div className="main-contetnt">
      <header className="about-header">
        <div className="about-title">
          <span>
            <strong onClick={() => navigate("/")}>НА ГЛАВНУЮ</strong> ► КОНТАКТЫ
          </span>
        </div>
        <h2 className="about-h2">Контакты</h2>
      </header>
      <section className="contact-section">
        <h2>Почта</h2>
        <h3>kargo2016@gmail.com</h3>
      </section>
    </div>
  );
}

export default ContactPage;

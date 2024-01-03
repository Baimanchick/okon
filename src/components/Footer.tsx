import React from "react";
import "../css/footer.scss";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Обо мне</h6>
            <p className="text-justify">
              Привет! Гулшаркан Култаева, родилась 24 октября 1972 года в селе
              Ак-Суу. В 1993 году закончила Ошский технологический техникум по
              специальности "Техник-технолог прядильного производства". В 2001
              году успешно завершила обучение в Ошском технологическом
              университете по специальности "Бухгалтерский учет и аудит". Рада
              делиться этим с тобой!
            </p>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Made in &copy; 2023 All Rights Reserved by{" "}
              <a href="#">Baimurat</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a
                  href="https://www.instagram.com/gulsharkan_kultaeva/"
                  className="footer-inst"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/megu.tur?locale=ru_RU"
                  className="footer-face"
                  target="_blank"
                >
                  <CiFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

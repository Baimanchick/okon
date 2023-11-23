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
            <h6>About</h6>
            <p className="text-justify">
              Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to
              help the upcoming programmers with the code. Scanfcode focuses on
              providing the most efficient code or snippets as the code wants to
              be simple. We will help programmers build up concepts in different
              programming languages that include C, C++, Java, HTML, CSS,
              Bootstrap, JavaScript, PHP, Android, SQL, and Algorithm.
            </p>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2017 All Rights Reserved by{" "}
              <a href="#">Scanfcode</a>.
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

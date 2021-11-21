import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "../styles/footer.css";

export const Footer = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled > 300 ? setVisible(true) : setVisible(false);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  window.addEventListener("scroll", toggleVisible);

  return (
    <footer>
      <div className="container py-4">
        <div className="row justify-content-center mt-2">
          <ul className="list-style-none">
            <li
              className="list-inline-item ml-2"
              style={{ display: visible ? "inline" : "none" }}
              onClick={scrollToTop}
            >
              <button
                type="button"
                class="btn btn-floating btn-sm"
                id="btn-back-to-top"
              >
                <FontAwesomeIcon icon={faArrowUp} />
              </button>
            </li>
            <li className="list-inline-item mr-4" alt="site title">
              Awesome creation by her highness 🙌&nbsp;
              <a
                href="https://github.com/gmlunesa"
                target="_blank"
                rel="noreferrer"
              >
                GMLUNESA
              </a>
              &nbsp;🙌
            </li>
            <li className="list-inline-item mr-4">
              <a
                href="mailto:patilkrunal11.kp@gmail.com"
                target="_blank"
                rel="noreferrer"
                alt="email link"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li className="list-inline-item mr-4">
              <a
                href="https://github.com/patilkrunal"
                target="_blank"
                rel="noreferrer"
                alt="github link"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="list-inline-item mr-4">
              <a
                href="https://linkedin.com/in/patilkrunal"
                target="_blank"
                rel="noreferrer"
                alt="linkedin link"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://twitter.com/_patilkrunal/"
                target="_blank"
                rel="noreferrer"
                alt="twitter link"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

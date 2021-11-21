import React from "react";

import Links from "../links";
import { Link } from "react-router-dom";
import "../../styles/landing/hero.css";

export const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container h-100">
        <div className="row h-100 justify-content-around">
          {/* + Hero section: Left side */}
          <div className="col-lg-5 my-auto">
            <div className="hero-introduction">
              <h1>
                <span className="wave" role="img" aria-label="Hand wave">
                  👋
                </span>
              </h1>
              <h1>Hi. I'm Krunal</h1>
              <p>
                I am a Computer Engineer at Army Institute of Technology, Pune.
                Let me know how you like my portfolio?
              </p>
              <Link
                to="#"
                className="main-button btn btn-primary shadow-sm"
                smooth={true}
              >
                Get to know me
              </Link>
              <a
                href="https://bit.ly/krunal-cv"
                target="_blank"
                rel="noreferrer"
                className="main-button btn btn-primary shadow-sm ml-3"
              >
                Download my resume
              </a>
            </div>
          </div>
          {/* - Hero section: Left side */}

          {/* + Hero section: Right side */}
          <div className="col-lg-4 my-auto">
            <div className="hero-bio">
              <div className="card shadow-sm mb-5">
                <div className="card-body">
                  <div className="icon">
                    <img
                      src="https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                      style={{ width: "5rem", height: "5rem" }}
                      alt="Hero Icon"
                    />
                  </div>
                  <h3 className="card-title">@patilkrunal</h3>
                  <h4>
                    <span
                      className="mr-1"
                      role="img"
                      aria-label="pin"
                      alt="pin emoji"
                    >
                      📍
                    </span>
                    Nashik
                    <br />
                  </h4>
                  <p className="card-text">
                    Backend enthusiast,
                    <br />
                    Compassionate
                  </p>
                  <Links />
                </div>
              </div>
            </div>
          </div>
          {/* - Hero section: Right side */}
        </div>
      </div>
    </section>
  );
};

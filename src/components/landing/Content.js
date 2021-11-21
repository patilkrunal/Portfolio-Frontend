import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendar,
  faTerminal,
  faGraduationCap,
  faUserGraduate,
  faCode,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

import languages from "../../data/languages.json";
import projects from "../../data/projects.json";
import "../../styles/bootstrap.min.css";
import "../../styles/landing/content.css";

export const Content = () => {
  return (
    <>
      <section className="content" id="content">
        <div className="container">
          {/* + Education subsection */}
          <div className="subsection">
            <h2>
              <span className="dot" />
              What do I <span className="word">Study</span>?
            </h2>

            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h3>Army Institute of Technology</h3>
                  <h4>
                    <FontAwesomeIcon icon={faBriefcase} className="mr-2" />{" "}
                    Computer Engineer
                  </h4>
                  <h4>
                    <FontAwesomeIcon icon={faCalendar} className="mr-2" /> Jun
                    2018 - May 2022
                  </h4>
                </div>

                <div className="card-text">
                  ◆ Pursuing Bachelor of Engineering from Pune University. Have
                  been engaged with various clubs/cells of the college and is in
                  constant search of expanding my knowledge.
                  <br />◆ Have been associated with E-Cell of the college from
                  start of my college journey.
                </div>
              </div>
            </div>
          </div>
          {/* - Education subsection */}

          {/* + Technologies subsection */}
          <div className="subsection">
            <h2 className="mt-5">
              <span className="dot" />
              What do I <span className="word">know</span>?
            </h2>
            <div className="row">
              {languages.map((data, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="card">
                    <div className="card-text">
                      <div className="card-item">
                        <FontAwesomeIcon
                          icon={faTerminal}
                          className="mr-2 item-icon"
                        />{" "}
                        {data.language}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* - Technologies subsection */}

          {/* + Experience subsection */}
          <div className="subsection">
            <h2 className="mt-5">
              <span className="dot" />
              What did I <span className="word">work with</span>?
            </h2>

            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h3>MSlate.ai Inc.</h3>
                  <h4>
                    <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
                    Full Stack Developer Intern
                  </h4>
                  <h4>
                    <FontAwesomeIcon icon={faUserGraduate} className="mr-2" />{" "}
                    Dec 2020-Mar 2021
                  </h4>
                  <h4>
                    <FontAwesomeIcon icon={faLayerGroup} className="mr-2" />{" "}
                    Django | DjangoRestFramework | ReactJS | PostgreSQL | AWS |
                    Neo4j Graph Database | Bootstrap
                  </h4>
                </div>

                <div className="card-text">
                  Developed a digital portal for doctors/patients using Django,
                  ReactJS, Redux, Neo4j Graph Database, PostgreSQL. Practiced
                  agile development, collaborated with the team through sprint &
                  retrospective meetings. Features: chat | audio | video call |
                  EHR | JWT tokens | Beta trial conducted successfully.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h3>SriRam Industries</h3>
                  <h4>
                    <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
                    Web Development Intern
                  </h4>
                  <h4>
                    <FontAwesomeIcon icon={faUserGraduate} className="mr-2" />{" "}
                    Nov 2020-Dec 2020
                  </h4>
                  <h4>
                    <FontAwesomeIcon icon={faLayerGroup} className="mr-2" />{" "}
                    Django | Bootstrap | ORM | JWT | Admin User Flow
                  </h4>
                </div>

                <div className="card-text">
                  Developed a dynamic web-portal with admin support. Converted
                  offline workflow to digital platform. Built purely in Django
                  along with Jinja, Bootstrap5, ORM, Allauth, SocialOauth, Admin
                  Dashboard.
                </div>
              </div>
            </div>
          </div>
          {/* - Experience subsection */}

          {/* + Projects subsection */}
          <div className="subsection">
            <h2 className="mt-5">
              <span className="dot" />
              What have I <span className="word">experimented with</span>?
            </h2>
            <div className="row">
              {projects.map((data, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="card-title">
                        <h3>{data.project}</h3>
                        <h4>
                          <FontAwesomeIcon icon={faCode} className="mr-2" />
                          {data.language}
                        </h4>
                      </div>

                      <div className="card-text">{data.description}</div>
                    </div>
                    <div className="card-footer">
                      <a href={data.link} target="_blank" rel="noreferrer">
                        View
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* - Projects subsection */}
      </section>
    </>
  );
};

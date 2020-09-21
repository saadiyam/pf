import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section
          id="projects"
          className="colorlib-work"
          data-section="projects"
        >
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">
                  Recent Projects
                </h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/timely.gif)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">Timely Mobile App</a>
                      </h3>
                      <span>Java | SQLite | HTML/CSS</span>
                      <p className="icon">
                        <span>
                          <a
                            href="https://github.com/saadiyam/Timely-SQL"
                            target="_blank"
                          >
                            Github
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/shreya.gif)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">Portfolio Website</a>
                      </h3>
                      <span>HTML/CSS | Javascript</span>
                      <p className="icon">
                        <span>
                          <a
                            href="https://itsshreyageorge.imfast.io/index.html"
                            target="_blank"
                          >
                            Try It
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInTop"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/bread.gif)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">Bread app Landing Page</a>
                      </h3>
                      <span>HTML/CSS | Bootstrap</span>
                      <p className="icon">
                        <span>
                          <a
                            href="https://github.com/saadiyam/breadapp"
                            target="_blank"
                          >
                            Github
                          </a>
                        </span>
                        <span>
                          <a
                            href="http://breadapp.infinityfreeapp.com/?=i&i=2"
                            target="_blank"
                          >
                            Try It
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInBottom"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/portfolio.gif)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">Personal Portfolio Website</a>
                      </h3>
                      <span>HTML/CSS | jQuery | Javascript</span>
                      <p className="icon">
                        <span>
                          <a href="https://github.com/saadiyam/portfoliov1">
                            Github
                          </a>
                        </span>
                        <span>
                          <a href="https://saadiyam.github.io/portfoliov1/">
                            Try It
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/blog.gif)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">Blog Project</a>
                      </h3>
                      <span> Node | EJS | MongoDB</span>
                      <p className="icon">
                        <span>
                          <a
                            href="https://github.com/saadiyam/BlogWebsite"
                            target="_blank"
                          >
                            Github
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/quiz.gif)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">Quick Quiz</a>
                      </h3>
                      <span> JavaScript | HTML/CSS</span>
                      <p className="icon">
                        <span>
                          <a
                            href="https://github.com/saadiyam/quickquiz"
                            target="_blank"
                          >
                            Github
                          </a>
                        </span>
                        <span>
                          <a
                            href="https://jsquickquiz.imfast.io/"
                            target="_blank"
                          >
                            Try It
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

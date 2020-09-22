import React, { Component } from "react";

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li
                style={{
                  backgroundImage: "url(images/about-bg.png)",
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>
                            Hi! <br />
                            I'm Saadiya.
                          </h1>
                          <p>
                            <p>ambereensaadiya@gmail.com</p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="/images/SaadiyaAmbereen_Resume.pdf"
                              download
                            >
                              Download CV
                            </a>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://github.com/saadiyam"
                              target="_blank"
                            >
                              Github
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                style={{
                  backgroundImage: "url(images/about-bg.png)",
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>
                            An aspiring <br />
                            Web Developer.
                          </h1>
                          <p>
                            <p>ambereensaadiya@gmail.com</p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="/images/SaadiyaAmbereen_Resume.pdf"
                              download
                            >
                              Download CV
                            </a>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://github.com/saadiyam"
                              target="_blank"
                            >
                              Github
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <div class="arrow">
                <span></span>
                <span></span>
              </div>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

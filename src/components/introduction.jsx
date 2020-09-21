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
              <li>
                <div className="overlay" />
                <div
                  className="container-fluid animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="row">
                    <div className="col-md-12 col-md-offset-12 col-md-pull-12 col-sm-12 col-xs-12 js-fullheight slider-text">
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
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

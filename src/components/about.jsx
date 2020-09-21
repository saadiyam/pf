import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section id="about" className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I am an aspiring web developer with knowledge in many
                        different front end and back end languages and
                        databases. My objective is to be the best developer I
                        can be and to contribute to the technology industry all
                        that I know and can do. I am dedicated to performing and
                        learning and continously making strides to achieve my
                        potential.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my skills{" "}
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Front End Languages</h3>
                    <p>HTML, CSS, Javascript</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Back End Languages</h3>
                    <p>Java, PHP, C++, C#</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Databases</h3>
                    <p>MySQL, SQLite, Mongo, Firebase</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Frameworks </h3>
                    <p>jQuery, Bootstrap, .NET</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Others</h3>
                    <p>
                      Android Development, Adobe Photoshop, Adobe XD, MS Office,
                      Digital Marketing
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc ">
                    <h3>Certifications</h3>
                    <p>
                      Fundamentals of Digital Marketing, Google Digital Garage
                      (2020)
                      <br />
                      University of Helsinki Elements of AI(2019) <br />
                      Dell EMC Academic Associate Information Storage and
                      Management (2019)
                      <br />
                      International Computer Driving License (ICDL), (2018)
                      <br />
                      Oracle Academy Database Design and Programming with SQL
                      (2017)
                      <br />
                      Cisco Networking Academy IT Essentials (2016) <br />
                    </p>
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

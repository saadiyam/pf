import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section
          id="timeline"
          className="colorlib-experience"
          data-section="timeline"
        >
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Freelance <span>2020 - Present </span>
                        </h2>
                        <p>
                          I am currently working as a freelancer while searching
                          for a suitable job.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Internship at Wisdom IT Solutions <span>2018</span>
                        </h2>
                        <p>
                          I joined Wisdom IT Solutions as a Junior Web Developer
                          Intern. My major part of the work had been to assist
                          in updatation of websites and incorporating new
                          features into them. I also performed testing of
                          websites.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          B.Sc Information Systems and Management{" "}
                          <span>2016-2019</span>
                        </h2>
                        <p>Manipal Academy of Higher Education, Dubai</p>
                        <p>
                          I completed my under-graduation studies with major in
                          Software Developement. I have taken courses like OOPs,
                          Computer Networks, and Android Development over the
                          years and have better understanding of these subjects.
                          I have also been a part of the Career Developement
                          Centre and the Project Cell. I also volunteered for
                          various events.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Primary and Higher Education <span>2001-2016</span>
                        </h2>
                        <p>Our Own English High School, Sharjah, UAE</p>
                        <p>
                          I have completed my higher secondary education with
                          major subjects as Economics, Accountancy &
                          Informatics. During my time at school, I developed an
                          interest in web development. I also volunteered at
                          various events which helped me develop team skills.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

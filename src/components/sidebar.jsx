import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <nav
          class="navbar navbar-inverse navbar-fixed-top animate-box"
          data-animate-effect="fadeInLeft"
          role="navigation"
        >
          <div class="container-fluid">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#home">
                SA
              </a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav">
                <li>
                  <a
                    href="#colorlib-hero"
                    data-nav-section="home"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    data-nav-section="about"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    data-nav-section="projects"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#timeline"
                    data-nav-section="#timeline"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    Experience
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

import React, { Component } from "react";
import {} from "../styles/sidebar.css";
import profilePicture from "../assets/profile-picture.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <aside className="js-fullheight">
          <div className="text-center profile-section">
            <img src={profilePicture} alt="profile-pic" />
            <h1>
              <a href="index.html">Mean Kaenchan</a>
            </h1>
            <div className="column-content">
              <span className="email">
                <a id="mail-var" href="mailto:napasorn.kch@gmail.com">
                  <FontAwesomeIcon icon={solid("envelope")} color="dark" />{" "}
                  napasorn.kch@gmail.com
                </a>
              </span>
              <span className="linkedin-link">
                <a
                  href="https://www.linkedin.com/in/nkaenchan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={brands("linkedin")} /> nkaenchan
                </a>
              </span>
              <span className="github-link">
                <a
                  href="https://github.com/meankch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={brands("github")} /> meankch
                </a>
              </span>
            </div>
          </div>
          <nav role="navigation" className="navbar">
            <div id="navbar">
              <ul>
                <li>
                  <a href="#about" data-nav-section="about">
                    About
                  </a>
                </li>
                <li>
                  <a href="#experiences" data-nav-section="experiences">
                    Experiences
                  </a>
                </li>
                <li>
                  <a href="#skills" data-nav-section="skills">
                    Skills
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="sidebar-footer">
            <p>
              <small>
                Made with
                <FontAwesomeIcon icon={solid("heart")} color="red" beat />
              </small>
            </p>
          </div>
        </aside>
      </div>
    );
  }
}

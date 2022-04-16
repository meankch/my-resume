import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  brands
} from "@fortawesome/fontawesome-svg-core/import.macro";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/about.jpg)" }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Mean Kaenchan</a>
              </h1>
              <span className="email">
                <i className="icon-mail"></i> napasorn.kch@gmail.com
              </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/nkaenchan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/meankch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={brands("github")} />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>
                  Made with 
                  <FontAwesomeIcon icon={solid("heart")} color="red" beat /> and 🍺
                </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}

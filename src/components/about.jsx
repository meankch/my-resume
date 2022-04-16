import React, { Component } from "react";
import {  } from '../styles/about.css';

export default class About extends Component {
  render() {
    return (
      <div className="about-section">
        <section data-section="about">
          <div className="narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <h2 className="heading">Who Am I?</h2>
                      <p>I am a software developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h2 className="heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Mid-Level Software Developer at Seven Peaks Software</h3>
                    <p>
                      Desgins, develops and maintains the backend server of a Property Managerment platform which serves the users, the professional real estate agencies, of around 100+ per day.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Software Developer at HydroNeo Ltd,.</h3>
                    <p>
                      Designs, develops, and maintain both the backend server and the mobile application by using Flutter as a development framework for the mobile app. And used RxJava with Spring Framework for the backend server.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Application Development Senior Analyst at Accenture</h3>
                    <p>
                      Involved in design process and also develops & maintain the API Gateway using Apigee for a large-scale mobile-banking application that servers the target user of more than 1 million users per month.
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

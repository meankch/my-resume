import React, { Component } from "react";
import {} from "../styles/about.css";

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
                      <p>
                        I am a Software Developer with a demonstrated history of
                        more than 3 years working in the information technology
                        and services industry. Skilled in C# .NET, Java, Apigee
                        API Management Platform, CI/CD using Jenkins, and Spring
                        framework. Strong engineering professional with a
                        Bachelor's degree focused in Computer Engineering.
                      </p>
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
                <h2 className="heading">Experiences</h2>
              </div>
            </div>
            <div className="column">
              <div className="row text-center animate-box shadow-sm experiences">
                <div className="services color-1">
                  <div className="row exp-title">
                    <div className="col-2">
                      <img
                        id="svp-img"
                        src="../assets/sevenpeaks-logo.jpg"
                        alt="sevenpeaks-software-logo"
                      ></img>
                    </div>
                    <div className="col-8">
                      <h3>
                        Mid-Level Software Developer at Seven Peaks Software
                      </h3>
                    </div>
                  </div>
                  <div className="desc">
                    <p className="experiences-paragragh">
                      • Desgins, develops and maintains the backend server of a
                      Property Managerment platform which serves the users, the
                      professional real estate agencies, of around 100+ per day.
                    </p>
                    <p className="experiences-paragragh">
                      • Implemented APIs using C# WebApi to enable both mobile
                      application and the CRM web application to retrieve data
                      used within the app from MongoDB, ElasticSearch, and Azure
                      Blob Storage
                    </p>
                    <p className="experiences-paragragh">
                      • Maintain and develop new features for a customizable
                      website using Squidex and Angular
                    </p>
                  </div>
                </div>
              </div>
              <div className="row text-center animate-box shadow-sm experiences">
                <div className="services color-3">
                  <div className="row exp-title">
                    <div className="col-2">
                      <img
                        id="svp-img"
                        src="../assets/hydroneo-logo.png"
                        alt="hydroneo-ltd-logo"
                      ></img>
                    </div>
                    <div className="col-8">
                      <h3>Software Developer at HydroNeo Ltd,.</h3>
                    </div>
                  </div>
                  <div className="desc">
                    <p>
                      Designs, develops, and maintain both the backend server
                      and the mobile application by using Flutter as a
                      development framework for the mobile app. And used RxJava
                      with Spring Framework for the backend server.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row text-center animate-box shadow-sm experiences">
                <div className="services color-5">
                  <div className="row exp-title">
                    <div className="col-2">
                      <img
                        id="svp-img"
                        src="../assets/accenture-logo.png"
                        alt="accenture-corp-logo"
                      ></img>
                    </div>
                    <div className="col-8">
                      <h3>
                        Application Development Senior Analyst at Accenture
                      </h3>
                    </div>
                  </div>
                  <div className="desc">
                    <p>
                      Involved in design process and also develops & maintain
                      the API Gateway using Apigee for a large-scale
                      mobile-banking application that servers the target user of
                      more than 1 million users per month.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row text-center animate-box shadow-sm experiences">
                <div className="services color-5">
                  <div className="row exp-title">
                    <div className="col-2">
                      <img
                        id="svp-img"
                        src="../assets/accenture-logo.png"
                        alt="accenture-corp-logo"
                      ></img>
                    </div>
                    <div className="col-8">
                      <h3>
                        Application Development Analyst at Accenture
                      </h3>
                    </div>
                  </div>
                  <div className="desc">
                    <p>
                      Involved in design process and also develops & maintain
                      the API Gateway using Apigee for a large-scale
                      mobile-banking application that servers the target user of
                      more than 1 million users per month.
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

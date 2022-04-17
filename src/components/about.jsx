import React, { Component } from "react";
import {} from "../styles/about.css";
import acnLogo from '../assets/acnLogo.png';
import hydroneoLogo from '../assets/hydroneo-logo.png';
import sevenpeaksLogo from '../assets/sevenpeaks-logo.jpg';

export default class About extends Component {
  render() {
    return (
      <div className="about-section">
        <section id="about" data-section="about">
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
        <section id="experiences">
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
                    <div className="col-2" id="svpeaks-img">
                      <img
                        id="svp-img"
                        src={sevenpeaksLogo}
                        alt="sevenpeaks-software-logo"
                      ></img>
                    </div>
                    <div className="col-8" id="svpeaks-designation">
                      <h3 id="svpeaks-designation-txt">
                        Mid-Level Software Developer at Seven Peaks Software
                      </h3>
                      <small>
                        Nov 2021 - Present.
                      </small>
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
                    <div className="col-2" id="hdn-img">
                      <img
                        id="hydroneo-img"
                        src={hydroneoLogo}
                        alt="hydroneo-ltd-logo"
                      ></img>
                    </div>
                    <div className="col-8" id="hydroneo-designation">
                      <h3 id="hydroneo-designation-txt">Software Developer at HydroNeo Ltd,.</h3>
                      <small>
                        Mar 2021 - Oct 2021
                      </small>
                    </div>
                  </div>
                  <div className="desc">
                    <p className="experiences-paragragh">
                      • Designs, develops, and maintain both the backend server
                      and the mobile application by using Flutter as a
                      development framework for the mobile app. And used RxJava
                      with Spring Framework for the backend server.
                    </p>
                    <p className="experiences-paragragh">
                      • Implemented Java Services in a monolithic application by
                      using Spring Boot framework and Java Reactive
                      Programming(RxJava)
                    </p>
                    <p className="experiences-paragragh">
                      • Implemented mobile application for iOS and Android
                      devices by using Flutter
                    </p>
                    <p className="experiences-paragragh">
                      • Worked with MongoDB database and integrate it with Java
                      application
                    </p>
                    <p className="experiences-paragragh">
                      • Deployed monolithic Java application using Docker and
                      Jenkins
                    </p>
                  </div>
                </div>
              </div>
              <div className="row text-center animate-box shadow-sm experiences">
                <div className="services color-5">
                  <div className="row exp-title">
                    <div className="col-2" id="accenture-img">
                      <img
                        id="acn-img"
                        src={acnLogo}
                        alt="accenture-corp-logo"
                      ></img>
                    </div>
                    <div className="col-8" id="acn-designation">
                      <h3 id="acn-designation-txt">
                        Application Development Senior Analyst at Accenture
                      </h3>
                      <small>
                        Dec 2020 - Mar 2021
                      </small>                   
                    </div>
                  </div>
                  <div className="desc">
                    <p className="experiences-paragragh">
                      • Involved in design process and also develops & maintain
                      the API Gateway using Apigee for a large-scale
                      mobile-banking application that servers the target user of
                      more than 1 million users per month.
                    </p>
                    <p className="experiences-paragragh">
                      • Implemented Java Microservices with RESTful APIs by
                      using Spring Boot framework integrated with MySQL database
                      and MongoDB database
                    </p>
                    <p className="experiences-paragragh">
                      • Managed and maintained Consul, a distributed Key-Value
                      storage for a large-scale mobile-banking application
                    </p>
                    <p className="experiences-paragragh">
                      • Designed, developed, and maintained APIs of a
                      mobile-banking application through the tool Apigee API
                      management platform
                    </p>
                  </div>
                </div>
              </div>
              <div className="row text-center animate-box shadow-sm experiences">
                <div className="services color-5">
                  <div className="row exp-title">
                    <div className="col-2" id="accenture-img">
                      <img
                        id="acn-img"
                        src={acnLogo}
                        alt="accenture-corp-logo"
                      ></img>
                    </div>
                    <div className="col-8" id="acn-designation">
                      <h3 id="acn-designation-txt">Application Development Analyst at Accenture</h3>
                      <small>
                        Jun 2019 - Dec 2020
                      </small>
                    </div>
                  </div>
                  <div className="desc">
                    <p className="experiences-paragragh">
                      • Implemented Web-Microservices with RESTful APIs for a
                      large-scale Banking System using Apigee API Management
                      Platform, Java Spring Boot, and integrate them with MySQL
                      database & MongoDB database.
                    </p>
                    <p className="experiences-paragragh">
                      • Implemented a POC of a web application for a Banking
                      system using Kotlin
                    </p>
                    <p className="experiences-paragragh">
                      • Built and maintained CI/CD software development
                      pipelines on On-Premise, AWS cloud, and Google Cloud
                      Platform(GCP)
                    </p>
                    <p className="experiences-paragragh">
                      • Involved in designs, builds and develops an e-Government
                      Procurement platform for Thailand Comptroller General's
                      Department using Blockchain: Hyperledger Indy.
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

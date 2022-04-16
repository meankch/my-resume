import React, { Component } from "react";
import {} from "../styles/skills.css";

export default class Skills extends Component {
  render() {
    return (
      <div className="skills-section">
        <section id="skills" data-section="skills">
          <h2>Skills</h2>
          <div className="container">
            <div className="row align-items-center" id="skills-summary">
              <div className="col-md-4 animate-box shadow-sm" id="programming">
                <div id="box-title">
                  <h4>Programming</h4>
                </div>
                <hr />
                <div id="row-item" className="row">
                  <div id="programming-img" className="col-md-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                      alt="java-lang"
                    />
                  </div>
                  <div id="programming-desc" className="col-md-7">
                    <p>java</p>
                  </div>
                  <div id="yrs-desc" className="col-md-3">
                    <p>3 years</p>
                  </div>
                </div>
                <div id="row-item" className="row">
                  <div id="programming-img" className="col-md-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                      alt="csharp-lang"
                    />
                  </div>
                  <div id="programming-desc" className="col-md-7">
                    <p>c sharp</p>
                  </div>
                  <div id="yrs-desc" className="col-md-3">
                    <p>6 months</p>
                  </div>
                </div>
                <div id="row-item" className="row">
                  <div id="programming-img" className="col-md-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
                      alt="dart-lang"
                    />
                  </div>
                  <div id="programming-desc" className="col-md-7">
                    <p>Dart</p>
                  </div>
                  <div id="yrs-desc" className="col-md-3">
                    <p>6 months</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box shadow-sm" id="framework">
                <div id="box-title">
                  <h4>Framework</h4>
                </div>
                <hr />
                <div id="row-item" className="row">
                  <div id="programming-img" className="col-md-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                      alt="spring-lang"
                    />
                  </div>
                  <div id="programming-desc" className="col-md-7">
                    <p>Spring / Spring Boot</p>
                  </div>
                  <div id="yrs-desc" className="col-md-3">
                    <p>3 years</p>
                  </div>
                </div>
                <div id="row-item" className="row">
                  <div id="programming-img" className="col-md-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                      alt="flutter-lang"
                    />
                  </div>
                  <div id="programming-desc" className="col-md-7">
                    <p>Flutter</p>
                  </div>
                  <div id="yrs-desc" className="col-md-3">
                    <p>6 months</p>
                  </div>
                </div>
                <div id="row-item" className="row">
                  <div id="programming-img" className="col-md-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
                      alt="angular-lang"
                    />
                  </div>
                  <div id="programming-desc" className="col-md-7">
                    <p>Angular</p>
                  </div>
                  <div id="yrs-desc" className="col-md-3">
                    <p>6 months</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box shadow-sm" id="ci-cd">
                <div id="box-title">
                  <h4>Database</h4>
                </div>
                <hr />
                <div id="row-item" className="row">
                  <div id="programming-img" className="col-md-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                      alt="mongogdb-lang"
                    />
                  </div>
                  <div id="programming-desc" className="col-md-7">
                    <p>MongoDB</p>
                  </div>
                  <div id="yrs-desc" className="col-md-3">
                    <p>3 years</p>
                  </div>
                </div>
                <div id="row-item" className="row">
                  <div id="programming-img" className="col-md-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                      alt="mysql-lang"
                    />
                  </div>
                  <div id="programming-desc" className="col-md-7">
                    <p>MySQL</p>
                  </div>
                  <div id="yrs-desc" className="col-md-3">
                    <p>3 years</p>
                  </div>
                </div>
                <div id="row-item" className="row">
                  <div id="programming-img" className="col-md-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                      alt="postgres-lang"
                    />
                  </div>
                  <div id="programming-desc" className="col-md-7">
                    <p>PostgreSQL</p>
                  </div>
                  <div id="yrs-desc" className="col-md-3">
                    <p>1 year</p>
                  </div>
                </div>
              </div>
            </div>
            {/* row 2 */}
            <div className="row align-items-center" id="skills-summary">
              <div className="col-md-4 animate-box shadow-sm" id="ci-cd">
                <div id="box-title">
                  <h4>Orchestration</h4>
                </div>
                <hr />
                <div id="row-item" className="row">
                  <div id="programming-img" className="col-md-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
                      alt="docker-lang"
                    />
                  </div>
                  <div id="programming-desc" className="col-md-7">
                    <p>Docker</p>
                  </div>
                  <div id="yrs-desc" className="col-md-3">
                    <p>1 year</p>
                  </div>
                </div>
                <div id="row-item" className="row">
                  <div id="programming-img" className="col-md-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
                      alt="kubernetes-lang"
                    />
                  </div>
                  <div id="programming-desc" className="col-md-7">
                    <p>Kubernetes</p>
                  </div>
                  <div id="yrs-desc" className="col-md-3">
                    <p>1 year</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box shadow-sm" id="ci-cd">
                <div id="box-title">
                  <h4>Cloud Platform</h4>
                </div>
                <hr />
                <div id="row-item" className="row">
                  <div id="programming-img" className="col-md-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
                      alt="azure-lang"
                    />
                  </div>
                  <div id="programming-desc" className="col-md-7">
                    <p>Azure</p>
                  </div>
                  <div id="yrs-desc" className="col-md-3">
                    <p>1 year</p>
                  </div>
                </div>
                <div id="row-item" className="row">
                  <div id="programming-img" className="col-md-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
                      alt="gcp-lang"
                    />
                  </div>
                  <div id="programming-desc" className="col-md-7">
                    <p>Google Cloud Platform</p>
                  </div>
                  <div id="yrs-desc" className="col-md-3">
                    <p>1 year</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box shadow-sm" id="ci-cd">
                <div id="box-title">
                  <h4>Project Management</h4>
                </div>
                <hr />
                <div id="row-item" className="row">
                  <div id="programming-img" className="col-md-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
                      alt="jira-agile-lang"
                    />
                  </div>
                  <div id="programming-desc" className="col-md-7">
                    <p>Jira (Agile - Scrum)</p>
                  </div>
                  <div id="yrs-desc" className="col-md-3">
                    <p>2.5 years</p>
                  </div>
                </div>
                <div id="row-item" className="row">
                  <div id="programming-img" className="col-md-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
                      alt="jira-kanban-lang"
                    />
                  </div>
                  <div id="programming-desc" className="col-md-7">
                    <p>Jira (Kanban)</p>
                  </div>
                  <div id="yrs-desc" className="col-md-3">
                    <p>6 months</p>
                  </div>
                </div>
              </div>
            </div>
            {/* end row 2 */}
            {/* row 3 */}
            <div className="row align-items-center" id="skills-summary">
              <div className="col-md-4 animate-box shadow-sm" id="ci-cd">
                <div id="box-title">
                  <h4>CI / CD</h4>
                </div>
                <hr />
                <div id="row-item" className="row">
                  <div id="programming-img" className="col-md-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
                      alt="jenkins-lang"
                    />
                  </div>
                  <div id="programming-desc" className="col-md-7">
                    <p>Jenkins</p>
                  </div>
                  <div id="yrs-desc" className="col-md-3">
                    <p>3 years</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box shadow-sm" id="ci-cd">
                <div id="box-title">
                  <h4>Message Queue</h4>
                </div>
                <hr />
                <div id="row-item" className="row">
                  <div id="programming-img" className="col-md-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg"
                      alt="kafka-lang"
                    />
                  </div>
                  <div id="programming-desc" className="col-md-7">
                    <p>Kafka</p>
                  </div>
                  <div id="yrs-desc" className="col-md-3">
                    <p>1 year</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box shadow-sm" id="ci-cd">
                <div id="box-title">
                  <h4>Api Management</h4>
                </div>
                <hr />
                <div id="row-item" className="row">
                  <div id="programming-img" className="col-md-2">
                    <img src="../assets/apigee-svg.svg" alt="apigee-lang" />
                  </div>
                  <div id="programming-desc" className="col-md-7">
                    <p>Apigee</p>
                  </div>
                  <div id="yrs-desc" className="col-md-3">
                    <p>1 year</p>
                  </div>
                </div>
              </div>
            </div>
            {/* end row 3 */}
          </div>
        </section>
      </div>
    );
  }
}

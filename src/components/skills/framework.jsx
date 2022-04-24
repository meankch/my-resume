import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function FrameworkCard() {
  return (
    <Card style={{ minWidth: 250, width: 400, minHeight: 220, maxHeight: "60vh" }}>
      <CardContent>
        <Typography variant="h6" component="div">
          Framework
        </Typography>
        <div id="row-item" className="row">
          <div id="programming-img" className="col-md-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
              alt="spring-lang"
            />
          </div>
          <div id="programming-desc" className="col-md-5">
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
          <div id="programming-desc" className="col-md-5">
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
          <div id="programming-desc" className="col-md-5">
            <p>Angular</p>
          </div>
          <div id="yrs-desc" className="col-md-3">
            <p>6 months</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

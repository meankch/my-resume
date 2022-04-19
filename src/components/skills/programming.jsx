import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function ProgrammingCard() {
  return (
    <Card style={{ minWidth: 250, width: 400, minHeight: 220, maxHeight: 320 }}>
      <CardContent>
        <Typography variant="h6" component="div">
            Programming
        </Typography>
        <div id="row-item" className="row">
          <div id="programming-img" className="col-md-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              alt="java-lang"
            />
          </div>
          <div id="programming-desc" className="col-md-5">
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
          <div id="programming-desc" className="col-md-5">
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
          <div id="programming-desc" className="col-md-5">
            <p>Dart</p>
          </div>
          <div id="yrs-desc" className="col-md-3">
            <p>6 months</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

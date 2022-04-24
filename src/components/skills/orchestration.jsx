import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function OrchestrationCard() {
  return (
    <Card style={{ minWidth: 250, width: 400, minHeight: 220, maxHeight: "60vh" }}>
      <CardContent>
        <Typography variant="h6" component="div">
          Orchestration
        </Typography>
        <div id="row-item" className="row">
          <div id="programming-img" className="col-md-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
              alt="docker-lang"
            />
          </div>
          <div id="programming-desc" className="col-md-5">
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
          <div id="programming-desc" className="col-md-5">
            <p>Kubernetes</p>
          </div>
          <div id="yrs-desc" className="col-md-3">
            <p>1 year</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function ProjectManagementCard() {
  return (
    <Card style={{ minWidth: 250, width: 400, height: 220, maxHeight: 320 }}>
      <CardContent>
        <Typography variant="h6" component="div">
        Project Management
        </Typography>
        <div id="row-item" className="row">
          <div id="programming-img" className="col-md-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
              alt="jira-agile-lang"
            />
          </div>
          <div id="programming-desc" className="col-md-5">
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
          <div id="programming-desc" className="col-md-5">
            <p>Jira (Kanban)</p>
          </div>
          <div id="yrs-desc" className="col-md-3">
            <p>6 months</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

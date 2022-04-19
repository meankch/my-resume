import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function DatabaseCard() {
  return (
    <Card style={{ minWidth: 250, width: 400, minHeight: 220, maxHeight: 320 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          Database
        </Typography>
        <div id="row-item" className="row">
          <div id="programming-img" className="col-md-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              alt="mongogdb-lang"
            />
          </div>
          <div id="programming-desc" className="col-md-5">
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
          <div id="programming-desc" className="col-md-5">
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
          <div id="programming-desc" className="col-md-5">
            <p>PostgreSQL</p>
          </div>
          <div id="yrs-desc" className="col-md-3">
            <p>1 year</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import apigeeSvg from "../../assets/apigeeSvg.svg";

export default function ApiManagementCard() {
  return (
    <Card style={{ minWidth: 250, width: 400, minHeight: 220, maxHeight: "60vh" }}>
      <CardContent>
        <Typography variant="h6" component="div">
          API Management
        </Typography>
        <div id="row-item" className="row">
          <div id="programming-img" className="col-md-2">
            <img src={apigeeSvg} alt="apigee-lang" />
          </div>
          <div id="programming-desc" className="col-md-5">
            <p>Apigee</p>
          </div>
          <div id="yrs-desc" className="col-md-3">
            <p>1 year</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

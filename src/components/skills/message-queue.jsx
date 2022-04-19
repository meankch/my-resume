import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function MessageQueueCard() {
  return (
    <Card style={{ minWidth: 250, width: 400, height: 220, maxHeight: 320 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          Message Queue
        </Typography>
        <div id="row-item" className="row">
          <div id="programming-img" className="col-md-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg"
              alt="kafka-lang"
            />
          </div>
          <div id="programming-desc" className="col-md-5">
            <p>Kafka</p>
          </div>
          <div id="yrs-desc" className="col-md-3">
            <p>1 year</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Project({ title, description, total_hours, date, start_time, end_time, location }) {
  return (
    
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{title}</h3>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-8 md-10">
          <p>{description}</p>
          <p>Hours required: {total_hours}</p>
          <p>Date: {date}</p>
          <p>Start Time: {start_time}</p>
          <p>End Time: {end_time}</p>
          <p>Location: {location}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Project;
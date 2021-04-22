import React from "react";
import { Card } from "react-bootstrap";

const Welcome = (props) => {
  return (
    <Card
      style={{
        top: "25vh",
        left: "25vw",
        position: "absolute",
      }}
    >
      <Card.Header>Location Not Valid</Card.Header>
      <Card.Body>
        You must use the Cabinet systems in SL to use this site.
      </Card.Body>
    </Card>
  );
};

export default Welcome;

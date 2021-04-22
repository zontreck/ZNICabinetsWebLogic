import React, { useState } from "react";
import { Card } from "react-bootstrap";

const Administrators = (props) => {
  return (
    <Card
      style={{
        position: "absolute",
        top: "25vh",
        left: "25vw",
        width: "50vw",
        height: "50vh",
      }}
    >
      <Card.Header>Administrators Editor</Card.Header>
      <Card.Body>Loading...</Card.Body>
    </Card>
  );
};

export default Administrators;

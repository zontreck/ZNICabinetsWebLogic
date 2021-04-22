import React, { useState } from "react";
import { Card } from "react-bootstrap";

const Administrators = (props) => {
  const [downloaded, setDownloaded] = useState(false);
  const CALLBACK = props.match.params.CALLBACK;
  const USER = props.match.params.USER;

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

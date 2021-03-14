import React from "react";
import StreamPiSEO from "@StreamPi/SEO";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { printOutDate } from "@util";

const Troubleshooting: React.FC = () => {
  const dateOfLastUpdate = "2021-03-13 22:35:27";
  return (
    <React.Fragment>
      <StreamPiSEO
        title="Troubleshoot"
        description="This page outlines common problems and troubleshooting steps for your Stream-Pi"
      />

      <Row className="text-center animate__animated animate__fadeIn">
        <Col>
          <h1>Troubleshooting Stream-Pi</h1>
        </Col>
      </Row>
      <Row className="mt-3 animate__animated animate__fadeInUp text-center">
        <Col>
          <p>
            If you are having some trouble, see if your issue is listed here
            among some of our more common ones!
          </p>
          <p>
            Below are solutions to these common issues / problems and some
            general troubleshooting steps.
          </p>
          <p>
            This page will be kept up to date with new information as it becomes
            available!
          </p>
        </Col>
      </Row>
      <Row className="animate__animated animate__fadeInLeft text-center mt-2">
        <Col>
          <h4>
            <em>
              Date of Last Update{" "}
              <strong>{printOutDate(dateOfLastUpdate)}</strong>
            </em>
          </h4>
        </Col>
      </Row>
      <Row className="animate__animated animate__fadeIn animate__slow mt-4 text-center">
        <Col>
          <h2>Coming soon!</h2>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Troubleshooting;

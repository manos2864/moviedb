import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Fellowship from "../../assets/about/fellowship.png";

class About extends Component {
  render() {
    return (
      <Row
        className="bg-info justify-content-center align-items-center"
        noGutters
      >
        <Col>
          <h1 className="mt-5">About us</h1>
          <p>
            The movie.db website has been created for demonstration purpose
            only.
          </p>
        </Col>
        <img src={Fellowship} alt="lotro of the rings" className="w-100" />
      </Row>
    );
  }
}

export default About;

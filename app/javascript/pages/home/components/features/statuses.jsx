import React from "react";
import { Row, Col } from "react-bootstrap";
import StatusesImg from "../../images/statuses.svg";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";

const Statuses = ({ isVisible }) => {
  return (
    isVisible && (
      <Row className="statuses">
        <Col lg={{ order: 2 }} className="align-self-center">
          <Fade bottom distance="50px">
            <div className="feature-description-wrapper">
              <h2 className="header">Status at first glance</h2>
              <p className="description">
                Know who is behind with payments and who is a great familli
                member in the moment you first lay eyes on the screen.
              </p>
            </div>
          </Fade>
        </Col>
        <Col lg={{ order: 1 }}>
          <Fade top distance="50px">
            <div className="statuses-wrapper">
              <div className="square">
                <img
                  src={StatusesImg}
                  alt="Image of different statuses."
                  className="statuses-img"
                />
              </div>
              <Pulse forever duration={3000}>
                <div className="circle" />
              </Pulse>
            </div>
          </Fade>
        </Col>
      </Row>
    )
  );
};

export default Statuses;

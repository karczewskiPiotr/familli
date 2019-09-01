import React from "react";
import { Row, Col } from "react-bootstrap";
import StatusBehind from "../../images/status-behind.svg";
import Bell from "../../images/notify.svg";
import Fade from "react-reveal/Fade";
import Swing from "react-reveal/Swing";

const Reminders = ({ isVisible }) => {
  return (
    isVisible && (
      <Row className="reminders">
        <Col lg>
          <Fade delay={300} duration={2000}>
            <div className="feature-description-wrapper">
              <h2 className="header">No hussle reminders</h2>
              <p className="description">
                Remidning members about their overdue payments has never been
                easier. In Familli you are always one click away from sending
                them email notifications!
              </p>
            </div>
          </Fade>
        </Col>
        <Col lg>
          <div className="behind-status-wrapper">
            <div className="notification-bell">
              <Fade right delay={900}>
                <Swing forever={true} duration={2000}>
                  <img src={Bell} alt="Bell icon." />
                </Swing>
              </Fade>
            </div>
            <Fade right>
              <div className="behind-status">
                <img
                  src={StatusBehind}
                  alt="Member behind with payments"
                  className="behind-status-img"
                />
              </div>
            </Fade>
          </div>
        </Col>
      </Row>
    )
  );
};

export default Reminders;

import React from "react";
import { Row, Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import AppGraphic from "../images/app-graphic-no-shadow.svg";

const AppMock = () => {
  return (
    <>
      <Row>
        <Col>
          <div className="app-graphic-wrapper">
            <div className="app-graphic-shadow" />
            <Slide bottom duration={1500}>
              <img
                src={AppGraphic}
                alt="Graphic representing the app."
                className="app-graphic"
              />
            </Slide>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AppMock;
